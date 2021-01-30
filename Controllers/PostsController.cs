using System.Collections.Generic;
using System.Threading.Tasks;
using ForumTwo.Data;
using ForumTwo.DTOs;
using ForumTwo.Model;
using ForumTwo.Services.PostService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ForumTwo.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class Posts : ControllerBase
    {
        private readonly IPostService _postService;
        public Posts(IPostService postService)
        {
            _postService = postService;
        }
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDiscussion(string id)
        {
            ServiceResponse<List<GetPostDTO>> response = await _postService.GetDiscussion(id); 
            return Ok();
        }
    }
}