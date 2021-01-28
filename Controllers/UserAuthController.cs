using System.Security.Claims;
using System.Threading.Tasks;
using ForumTwo.Data;
using ForumTwo.DTOs;
using ForumTwo.Model;
using ForumTwo.Services.UserServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System; 




namespace ForumTwo.Controllers
{   
    [Authorize]
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
        public async Task<IActionResult> CreateUser(PostUserDTO newUser)
        {
            ServiceResponse<GetUserDTO> response = await _userService.CreateUser(newUser); 
            return response.ReturnResult(); 
        } 
        [HttpGet]
        public async Task<IActionResult> GetUserProfile(){

            ServiceResponse<GetUserDTO> response = await _userService.GetUserProfile(
                this.User.FindFirst(ClaimTypes.NameIdentifier).Value);
            return response.ReturnResult();
        }
        [HttpPut]
        public async Task<IActionResult> UpdateUserProfile(PutUserDTO user){

            ServiceResponse<GetUserDTO> response = await _userService.UpdateUserProfile(
                this.User.FindFirst(ClaimTypes.NameIdentifier).Value, user); 
            return response.ReturnResult(); 
        }
    }
}