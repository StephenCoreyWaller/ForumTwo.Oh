using System;
using System.Collections.Generic;
using ForumTwo.Model;

namespace ForumTwo.DTOs
{
    public class GetCategoryDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Thread> Threads { get; set; }
        public DateTime DateCreated { get; set; }
    }
}