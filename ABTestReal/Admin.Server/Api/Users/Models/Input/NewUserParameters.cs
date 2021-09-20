using System;
using System.ComponentModel.DataAnnotations;
using Entities;
using Newtonsoft.Json;
using Tools.Time;

namespace Api.Users.Models.Input
{
    public class NewUserParameters
    {
        [JsonRequired]
        [JsonProperty("registration_date")]
        public long RegistrationDate { get; set; }

        [JsonRequired]
        [JsonProperty("last_activity_date")]
        public long LastActivityDate { get; set; }

        public User Build()
        {
            return new User()
            {
                RegistrationDate = DateTimeExtensions.ParseTimestamp(RegistrationDate),
                LastActivityDate = DateTimeExtensions.ParseTimestamp(LastActivityDate)
            };
        }
    }
}