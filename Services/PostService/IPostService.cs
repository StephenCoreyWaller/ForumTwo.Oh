using System.Collections.Generic;
using System.Threading.Tasks;
using ForumTwo.DTOs;
using ForumTwo.Model;

namespace ForumTwo.Services.PostService
{
    public interface IPostService
    {
        Task<ServiceResponse<List<GetPostDTO>>> GetDiscussion(string id); 
    }
}