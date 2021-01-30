//Model for post. Will hold User, parent post, and object of likes
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ForumTwo.Model
{
    public class Post
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public User User { get; set; }    
        [Required]
        public string Content { get; set; }
        public Post Parent { get; set; }
        public List<Like> Likes { get; set; }
    }
}