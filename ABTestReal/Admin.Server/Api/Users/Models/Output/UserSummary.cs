using System;
using Entities;
using Newtonsoft.Json;

namespace Api.Users.Models.Output
{
    public class UserSummary
    {
        public UserSummary(User source)
        {
            Id = source.Id;
            RegistrationDate = source.RegistrationDate;
            LastActivityDate = source.LastActivityDate;
        }
        
        
        [JsonProperty("id")]
        public long Id { get; }
        
        [JsonProperty("registration-date")]
        public DateTimeOffset RegistrationDate { get; }
        
        [JsonProperty("last-activity-date")]
        public DateTimeOffset LastActivityDate { get; }
    }
}