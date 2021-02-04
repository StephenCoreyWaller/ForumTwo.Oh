using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using ForumTwo.DTOs;
using ForumTwo.Model;
using ForumTwo.Services.ThreadServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace ForumTwo.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class ThreadsController : ControllerBase
    {
        private readonly IThreadService _threadService;
        public ThreadsController(IThreadService threadService)
        {
            _threadService = threadService;
        }
        [HttpPost]
        public async Task<IActionResult> PostThread(PostThreadDTO postThreadDTO)
        {
            Console.WriteLine(postThreadDTO); 
            ServiceResponse<GetThreadDTO> response = await _threadService.PostThread(
                postThreadDTO, this.User.FindFirst(ClaimTypes.NameIdentifier).Value); 
            return response.ReturnResult();
        }
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetThreads(int id)
        {
            ServiceResponse<List<GetThreadDTO>> response = await _threadService.GetThreads(id);
            return response.ReturnResult();
        }
    }
}