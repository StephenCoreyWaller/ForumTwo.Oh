using System.Collections.Generic;
using System.Threading.Tasks;
using ForumTwo.DTOs;
using ForumTwo.Model;

namespace ForumTwo.Services.ThreadServices
{
    public interface IThreadService
    {
        Task<ServiceResponse<GetThreadDTO>> PostThread(PostThreadDTO postThreadDTO, string userId);
        Task<ServiceResponse<List<GetThreadDTO>>> GetThreads(int id);
    }
}