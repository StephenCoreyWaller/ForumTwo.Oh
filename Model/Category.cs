/*
    Model for category that will seperate threads into tables
*/

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ForumTwo.Model
{
    public class Category
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public List<Thread> Threads { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public string Description { get; set; }
        
    }
}