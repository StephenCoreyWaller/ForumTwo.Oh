using System;
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
        public async Task<ServiceResponse<GetUserDTO>> CreateUser(PostUserDTO newUser)
        {
            ServiceResponse<GetUserDTO> response = new ServiceResponse<GetUserDTO>();

            try{
                var user = await _context.Users.AddAsync(_mapper.Map<User>(newUser)); 
                await _context.SaveChangesAsync();
                response.Data = _mapper.Map<GetUserDTO>(user.Entity);

            }catch(Exception ex){

                response.Message = ex.Message; 
                response.Success = false; 
                response.ResultStatusCode = StatusCode.UnprocessableEntity; 
            }
            return response;
        }
        public async Task<ServiceResponse<GetUserDTO>> GetUserProfile(string identifier){

            ServiceResponse<GetUserDTO> response = new ServiceResponse<GetUserDTO>();

            try{ 
                response.Data = _mapper.Map<GetUserDTO>(await _context.Users.FirstAsync(u => u.Auth == identifier)); 
            }
            catch (Exception ex){

                response.Message = ex.Message;
                response.Success = false;
                response.ResultStatusCode = StatusCode.UnprocessableEntity;

            }
            return response;
        }
        public async Task<ServiceResponse<GetUserDTO>> UpdateUserProfile(string identifier, PutUserDTO user)
        {
            ServiceResponse<GetUserDTO> resposne = new ServiceResponse<GetUserDTO>();

            try{
                User userInfo = await _context.Users.FirstOrDefaultAsync(u => u.Auth == identifier);
                _mapper.Map(user, userInfo);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex){

                resposne.Message = ex.Message;
                resposne.Success = false;
            }
            return resposne; 
        }
    }
}