using System;
using System.Collections.Generic;
using ForumTwo.Model;

namespace ForumTwo.DTOs
{
    public class GetThreadDTO
    {
        public int Id { get; set; } 
        public string Title { get; set; }
        public DateTime DateCreated { get; set; } 
        public string User { get; set; }
        public int List { get; set; }    
    }
}