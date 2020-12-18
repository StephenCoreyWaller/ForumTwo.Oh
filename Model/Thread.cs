//Model for thread that will hold a collection of posts 
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ForumTwo.Oh.Model
{
    public class Thread
    {
        public int Id { get; set; } 
        [Required]
        public string Title { get; set; }
        public DateTime DateCreated { get; set; }
        public User User { get; set; }
        public List<Post> Posts { get; set; }
        public Thread(){
            
            this.DateCreated = DateTime.Now; 
        }

    }
}