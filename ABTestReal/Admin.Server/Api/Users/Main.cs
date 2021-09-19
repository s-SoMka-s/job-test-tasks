using System;
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
        public Task<UserSummary[]> GetAll()
        {
            var summaries = _users.Select(u => new UserSummary(u)).ToArrayAsync();

            return summaries;
        }

        [HttpPost("")]
        public async Task<UserSummary> Add([FromBody] NewUserParameters parameters)
        {
            var @new = parameters.Build();
            
            var added = await _users.AddAsync(@new);
            await _context.SaveChangesAsync();

            return new UserSummary(added.Entity);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeleteAsync([FromQuery] long id)
        {
            var existed = await _users.FirstOrDefaultAsync(e => e.Id == id);
            if (default == existed)
            {
                return false;
            }

            _users.Remove(existed);
            await _context.SaveChangesAsync();

            return true;
        }

        [HttpGet("rolling_retention")]
        public double GetRollingRetention()
        {
            var registeredWeekAgoOrEarly = _users.Select(u => DateTimeOffset.UtcNow.AddDays(-7) < u.RegistrationDate).Count();
            var lastVisitWeekAgoOrLater = _users.Select(u => DateTimeOffset.UtcNow.AddDays(-7) > u.LastActivityDate).Count();

            return lastVisitWeekAgoOrLater / registeredWeekAgoOrEarly;
        }
    }
}