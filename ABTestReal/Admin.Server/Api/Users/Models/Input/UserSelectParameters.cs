using System;
using Microsoft.AspNetCore.Mvc;

namespace Api.Users.Models.Input
{
    public class UserSelectParameters
    {
        [FromQuery(Name = "user_ids")]
        public long[] UserIds { get; set; } = Array.Empty<long>();
    }
}