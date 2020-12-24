using System.Threading.Tasks;
using ForumTwo.Oh.DTOs;
using ForumTwo.Oh.Model;

namespace ForumTwo.Oh.Services.User
{
    public interface IUserService
    {
        Task<ServiceResponse<GetUserDTO>> CreateUser(PostUserDTO user); 
    }
}