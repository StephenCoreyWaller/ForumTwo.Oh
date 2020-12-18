using System.Threading.Tasks;
using ForumTwo.Oh.Data;
using ForumTwo.Oh.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ForumTwo.Oh.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserAuthController : ControllerBase
    {
        private readonly DataContext _context;
        public UserAuthController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> AddUser(){

            User user = new User{
                UserName = "Cheese", 
                Email = "Cheese@gmail.com"
            }; 
            await _context.Users.AddAsync(user); 
            await _context.SaveChangesAsync();  

            return Ok("success");
        }
    }
}