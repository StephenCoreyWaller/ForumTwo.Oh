/*
    Model for user profile
*/
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ForumTwo.Model
{
    public class User
    { 
        public int Id { get; set; }
        [Required]
        public string Auth { get; set; }
        public string UserName { get; set; } = "anonymous";  
        public string LName { get; set; } = "";
        public string FName { get; set; } = ""; 
        public string About { get; set; } = ""; 
        [Required]
        public string Email { get; set; }
        public string PhoneNumber { get; set; } = ""; 
        public string Company { get; set; }
        public bool Recruiting { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public List<Post> Posts { get; set; }
        public List<Thread> Threads { get; set; }
    
    }
}