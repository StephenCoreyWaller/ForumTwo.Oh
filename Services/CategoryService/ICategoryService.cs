

using System.Collections.Generic;
using System.Threading.Tasks;
using ForumTwo.DTOs;
using ForumTwo.Model;

namespace ForumTwo.Services.CategoryService
{
    public interface ICategoryService
    {
        Task<ServiceResponse<List<GetCategoryDTO>>> GetCategories(); 
    }
}