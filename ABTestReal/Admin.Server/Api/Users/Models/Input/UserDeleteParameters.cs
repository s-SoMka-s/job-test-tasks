using Newtonsoft.Json;

namespace Api.Users.Models.Input
{
    public class UserDeleteParameters
    {
        [JsonProperty("user_ids")]
        public long[] UserIds { get; set; }
    }
}
