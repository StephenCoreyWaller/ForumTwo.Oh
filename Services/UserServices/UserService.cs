using System.Threading.Tasks;
using AutoMapper;
using ForumTwo.Data;
using ForumTwo.DTOs;
using ForumTwo.Model;
using Microsoft.EntityFrameworkCore; 

namespace ForumTwo.Services.UserServices
{
    public class UserService : IUserService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public UserService(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<ServiceResponse<GetUserDTO>> CreateUser(PostUserDTO user)
        {
            ServiceResponse<GetUserDTO> response = new ServiceResponse<GetUserDTO>();
            response.Data = _mapper.Map<GetUserDTO>(await _context.Users.AddAsync(_mapper.Map<User>(user))); 
            return response; 
        }
    }
}