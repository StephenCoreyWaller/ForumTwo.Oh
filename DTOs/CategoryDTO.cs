using System;

namespace ForumTwo.DTOs
{
    public class CategoryDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Threads { get; set; }
        public DateTime DateCreated { get; set; }
    }
}