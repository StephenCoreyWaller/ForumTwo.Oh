using AutoMapper;
using ForumTwo.DTOs;
using ForumTwo.Model;

namespace ForumTwo
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<PostUserDTO, User>(); 
        }
    }
}