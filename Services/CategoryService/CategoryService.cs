using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ForumTwo.Data;
using ForumTwo.DTOs;
using ForumTwo.Model;

using Microsoft.EntityFrameworkCore;

namespace ForumTwo.Services.CategoryService
{
    public class CategoryService : ICategoryService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public CategoryService(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<ServiceResponse<List<GetCategoryDTO>>> GetCategories()
        {
            ServiceResponse<List<GetCategoryDTO>> response = new ServiceResponse<List<GetCategoryDTO>>();
            response.Data = _mapper.Map<List<GetCategoryDTO>>(await _context.Categories.ToListAsync());
            return response; 
        }
    }
}