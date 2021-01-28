namespace ForumTwo.DTOs
{
    public class PutUserDTO
    {
        public string UserName { get; set; }
        public string LName { get; set; }    
        public string FName { get; set; } 
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Company { get; set; }
        public string About { get; set; }
        public bool Recruiting { get; set; }
    }
}