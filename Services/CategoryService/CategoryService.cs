using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ForumTwo.Data;
using ForumTwo.DTOs;
using ForumTwo.Model;
using
using Microsoft.EntityFrameworkCore;

namespace ForumTwo.Services.CategoryService
{
    public class CategoryService : ICategoryService
    {
        private readonly DataContext _context;
        public CategoryService(DataContext _context)
        {
            _context = _context;
        }
        public async Task<ServiceResponse<List<GetCategoryDTO>>> GetCategories()
        {
            ServiceResponse<List<GetCategoryDTO>> response = new ServiceResponse<List<GetCategoryDTO>>();
            await _context.Categories.ToListAsync();
            //Set up get category
            //finish category controlloer and service
            //Start front end 
        }
    }
}