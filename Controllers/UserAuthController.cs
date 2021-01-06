using System.Security.Principal;
using System.Net.Cache;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks.Dataflow;
using System.Net;
using System.Threading.Tasks;
using ForumTwo.Data;
using ForumTwo.DTOs;
using ForumTwo.Model;
using ForumTwo.Services.UserServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System; 
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;



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
            Console.WriteLine("authorization took place ..../////////////////........././/////////");
            ServiceResponse<GetUserDTO> response = await _userService.CreateUser(newUser); 
            return response.ReturnResult();
             return Ok(); 
        } 
    }
}