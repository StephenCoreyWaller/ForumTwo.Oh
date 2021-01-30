using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ForumTwo.Data;
using ForumTwo.DTOs;
using ForumTwo.Model;

namespace ForumTwo.Services.PostService
{
    public class PostService : IPostService
    {
        private readonly DataContext _context;
        public PostService(DataContext context)
        {
            _context = context;
        }
        public async Task<ServiceResponse<List<GetPostDTO>>> GetDiscussion(string id)
        {
            ServiceResponse<List<GetPostDTO>> response = new ServiceResponse<List<GetPostDTO>>();

            try
            {

            }
            catch (Exception ex)
            {
                
            }
            return response; 
        }
    }
}