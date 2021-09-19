using System;
using Entities;

namespace Api.Users.Models.Input
{
    public class NewUserParameters
    {
        public long RegistrationDate { get; }
        public long LastActivityDate { get; }

        public User Build()
        {
            return new User()
            {
                RegistrationDate = DateTimeOffset.Now,
                LastActivityDate = DateTimeOffset.Now
            };
        }
    }
}