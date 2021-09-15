using Api.Users.Models.Input;
using Microsoft.AspNetCore.Mvc;

namespace Api.Users
{
    [ApiController]
    [Route("/api/users")]
    public class Main : Controller
    {
        public Main()
        {
            
        }

        [HttpGet("")]
        public void GetAll()
        {
            
        }

        [HttpPost("")]
        public void Add([FromBody] NewUserParameters parameters)
        {
            var @new = parameters.Build();
        }
    }
}