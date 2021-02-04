using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using ForumTwo.Data;
using ForumTwo.DTOs;
using ForumTwo.Model;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ForumTwo.Services.ThreadServices
{
    public class ThreadService : IThreadService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public ThreadService(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<ServiceResponse<List<GetThreadDTO>>> GetThreads(int id)
        {
            ServiceResponse<List<GetThreadDTO>> response = new ServiceResponse<List<GetThreadDTO>>();
            response.Data = await _context.Threads.Where(c => c.Category.Id == id)
                .Select(t => _mapper.Map<GetThreadDTO>(t)).ToListAsync();
            return response; 
        }
        public async Task<ServiceResponse<GetThreadDTO>> PostThread(PostThreadDTO postThreadDTO, string userId)
        {
            ServiceResponse<GetThreadDTO> response = new ServiceResponse<GetThreadDTO>();

            var createdThread = await _context.Threads.AddAsync(new Thread
            {
                Title = postThreadDTO.Title,
                User = await _context.Users.FirstOrDefaultAsync(u => u.Auth == userId),
                Category = await _context.Categories.FirstOrDefaultAsync(c => c.Id == int.Parse(postThreadDTO.Id)), 
            });
            await _context.SaveChangesAsync(); 
            response.Data = _mapper.Map<GetThreadDTO>(createdThread.Entity);
            return response; 
        }


    }
}