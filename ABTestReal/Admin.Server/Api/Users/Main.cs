using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Users.Models.Input;
using Api.Users.Models.Output;
using Db.Implementations;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Users
{
    [ApiController]
    [Route("/api/users")]
    public class Main : Controller
    {
        private readonly DbSet<User> _users;
        private readonly SqlContext _context;

        public Main(SqlContext context)
        {
            _context = context;
            _users = context.Users;
        }

        [HttpGet("")]
        public async Task<UserSummary[]> GetAll()
        {
            var summaries = await _users.Select(u => new UserSummary(u)).ToArrayAsync();

            return summaries;
        }

        [HttpPost("")]
        public async Task<UserSummary[]> Add([FromBody] NewUserParameters parameters)
        {
            if (parameters.LastActivityDate < parameters.RegistrationDate || parameters.LastActivityDate < 1 || parameters.RegistrationDate < 1)
            {
                return null;
            }

            var @new = parameters.Build();
            
            await _users.AddAsync(@new);
            await _context.SaveChangesAsync();

            return await _users.Select(u => new UserSummary(u)).ToArrayAsync();
        }

        [HttpDelete("")]
        public async Task<UserSummary[]> DeleteAsync([FromQuery] UserSelectParameters parameters)
        {
            await DeleteAllUsersAsync(parameters.UserIds);
            
            return await _users.Select(u => new UserSummary(u)).ToArrayAsync();
        }

        [HttpGet("rolling_retention")]
        public async Task<long> GetRollingRetentionAsync()
        {
            var lastVisitWeekAgoOrLater = new List<User>();
            var registeredWeekAgoOrEarly = new List<User>();

            await _users.ForEachAsync(u =>
            {
                if (u.RegistrationDate.AddDays(7) <= u.LastActivityDate)
                {
                    lastVisitWeekAgoOrLater.Add(u);
                }
                if (DateTimeOffset.UtcNow.AddDays(-7) >= u.RegistrationDate)
                {
                    registeredWeekAgoOrEarly.Add(u);
                }
            });

            return (long)((double)lastVisitWeekAgoOrLater.Count / registeredWeekAgoOrEarly.Count * 100 * 100);
        }


        private async Task<bool> DeleteAllUsersAsync(long[] ids)
        {
            var flag = true;
            foreach(var id in ids)
            {
                var existed = await _users.FirstOrDefaultAsync(e => e.Id == id);
                if (default != existed)
                {
                    _users.Remove(existed);
                    await _context.SaveChangesAsync();
                    
                }
                else
                {
                    flag = false;
                }
            }

            return flag;
        }
    }
}