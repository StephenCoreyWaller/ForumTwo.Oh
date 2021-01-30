using System;
using System.Collections.Generic;
using ForumTwo.Model;

namespace ForumTwo.DTOs
{
    public class GetPostDTO
    {
         public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public User User { get; set; }    
        public string Content { get; set; }
        public Post Parent { get; set; }
        public List<Like> Likes { get; set; }
    }
}