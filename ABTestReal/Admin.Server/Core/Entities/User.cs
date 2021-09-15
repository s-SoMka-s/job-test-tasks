using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("Users")]
    public class User
    {
        public User()
        {
            Id = 0;
            RegistrationDate = DateTimeOffset.Now;
            LastActivityDate = DateTimeOffset.Now;
        }
        
        
        [Key] public long Id { get; set; }
        public DateTimeOffset RegistrationDate { get; set; }
        public DateTimeOffset LastActivityDate { get; set; }
    }
}