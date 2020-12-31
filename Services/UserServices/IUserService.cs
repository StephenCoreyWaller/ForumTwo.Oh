using System.Threading.Tasks;
using ForumTwo.DTOs;
using ForumTwo.Model;

namespace ForumTwo.Services.UserServices
{
    public interface IUserService
    {
        Task<ServiceResponse<GetUserDTO>> CreateUser(PostUserDTO user); 
    }
}