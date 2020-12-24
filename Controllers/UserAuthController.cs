using System.Threading.Tasks;
using ForumTwo.Oh.Data;
using ForumTwo.Oh.DTOs;
using ForumTwo.Oh.Model;
using ForumTwo.Oh.Services.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ForumTwo.Oh.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserAuthController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IUserService _userService;
        public UserAuthController(DataContext context, IUserService userService)
        {
            _userService = userService;
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser(PostUserDTO user)
        {
            ServiceResponse<GetUserDTO> response = await _userService.CreateUser(user); 

            return Ok(response);
        }
    }
}