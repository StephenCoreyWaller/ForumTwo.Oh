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
            CreateMap<User, GetUserDTO>();
            CreateMap<PutUserDTO, User>();
            CreateMap<Category, GetCategoryDTO>();
            CreateMap<Thread, GetThreadDTO>().ForMember(getThread => getThread.User,
                User => User.MapFrom(u => u.User.UserName)).ForMember(getThread => getThread.List,
                Posts => Posts.MapFrom(p => p.Posts.Count));      
        }
    }
}