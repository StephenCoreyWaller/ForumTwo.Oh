using System.Collections.Generic;
using System.Threading.Tasks;
using ForumTwo.DTOs;
using ForumTwo.Model;
using ForumTwo.Services.CategoryService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ForumTwo.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            this._categoryService = categoryService;
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            ServiceResponse<List<GetCategoryDTO>> response = await _categoryService.GetCategories(); 
            return response.ReturnResult(); 
        }
    }
}