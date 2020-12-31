//User to monitor the user likes of a post 
using System;
using System.ComponentModel.DataAnnotations;

namespace ForumTwo.Model
{
    public enum TypeOfLike{
        Happy, 
        Sad, 
        Like, 
        Mad, 
        Laugh, 
        QuestionMark, 
        Correct 
    }
    public class Like
    {
        public int Id { get; set; }
        [Required]
        public TypeOfLike Type { get; set; }
        public DateTime DateCreated { get; set; }
        public User User { get; set; } 
        public Like(){
            
            this.DateCreated = DateTime.Now; 
        }
    }
}