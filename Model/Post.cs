//Model for post. Will hold User, parent post, and object of likes
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ForumTwo.Oh.Model
{
    public class Post
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public User User { get; set; }    
        [Required]
        public string Content { get; set; }
        public Post Parent { get; set; }
        public List<Like> Likes { get; set; }
        public Post(){
            
            this.DateCreated = DateTime.Now; 
        }
    }
}