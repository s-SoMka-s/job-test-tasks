using Entities;
using Newtonsoft.Json;
using Tools.Time;

namespace Api.Users.Models.Output
{
    public class UserSummary
    {
        public UserSummary(User source)
        {
            Id = source.Id;
            RegistrationDate = source.RegistrationDate.ToTimestamp();
            LastActivityDate = source.LastActivityDate.ToTimestamp();
        }
        
        
        [JsonProperty("id")]
        public long Id { get; }
        
        [JsonProperty("registration_date")]
        public long RegistrationDate { get; }
        
        [JsonProperty("last_activity_date")]
        public long LastActivityDate { get; }
    }
}