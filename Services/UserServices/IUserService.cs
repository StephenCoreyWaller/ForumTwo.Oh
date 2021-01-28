using System.Threading.Tasks;
using ForumTwo.DTOs;
using ForumTwo.Model;

namespace ForumTwo.Services.UserServices
{
    public interface IUserService
    {
        Task<ServiceResponse<GetUserDTO>> CreateUser(PostUserDTO user);
        Task<ServiceResponse<GetUserDTO>> GetUserProfile(string identifier);
        Task<ServiceResponse<GetUserDTO>> UpdateUserProfile(string identifier, PutUserDTO user);

    }
}