using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ForumTwo.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        // private readonly ICategoryService _categoryService;
        // public CategoryController(ICategoryService categoryService)
        // {
        //     this._categoryService = categoryService;
        // }
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            return Ok(); 
        }
    }
}