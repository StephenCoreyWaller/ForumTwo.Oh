using AutoMapper;
using ForumTwo.Oh.DTOs;
using ForumTwo.Oh.Model;

namespace ForumTwo.Oh
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<PostUserDTO, User>(); 
        }
    }
}