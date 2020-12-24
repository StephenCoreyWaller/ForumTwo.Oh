using System.Threading.Tasks;
using ForumTwo.Oh.Data;
using ForumTwo.Oh.DTOs;
using ForumTwo.Oh.Model;

namespace ForumTwo.Oh.Services.User
{
    public class UserService : IUserService
    {
        private readonly DataContext _context;
        public UserService(DataContext context)
        {
            _context = context;
        }
        public Task<ServiceResponse<GetUserDTO>> CreateUser(PostUserDTO user)
        {
            ServiceResponse<GetUserDTO> response = new ServiceResponse<GetUserDTO>();
            
            
        }
    }
}