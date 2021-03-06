using Microsoft.AspNetCore.Mvc;

namespace ForumTwo.Model
{
      public enum StatusCode {
        serverError, 
        BadRequest,
        Forbidden,
        NotFound,
        Unauthorized,
        UnprocessableEntity, 
        Ok 
    }
    public class ServiceResponse <T>
    {
        public T Data { get; set; }
        public bool Success { get; set; } = true; 
        public string Message { get; set; }  
        public StatusCode ResultStatusCode { get; set; } = StatusCode.Ok;   
        public IActionResult ReturnResult(){
 
            if(this.Data == null){
                ResultStatusCode = StatusCode.UnprocessableEntity; 
            }

            switch(ResultStatusCode){
                case StatusCode.serverError:  
                    return new Microsoft.AspNetCore.Mvc.StatusCodeResult(500);
                case StatusCode.BadRequest: 
                    return new Microsoft.AspNetCore.Mvc.BadRequestObjectResult(this); 
                case StatusCode.Forbidden: 
                    return new Microsoft.AspNetCore.Mvc.StatusCodeResult(403); 
                case StatusCode.NotFound:
                    return new Microsoft.AspNetCore.Mvc.NotFoundObjectResult(this); 
                case StatusCode.Unauthorized: 
                    return new Microsoft.AspNetCore.Mvc.UnauthorizedObjectResult(this);
                case StatusCode.UnprocessableEntity:
                    this.Success = false;
                    this.Message = "Something went wrong processing your request"; 
                    return new Microsoft.AspNetCore.Mvc.UnprocessableEntityObjectResult(this);
                default: 
                    return new Microsoft.AspNetCore.Mvc.OkObjectResult(this);  
            }
        }
    }
}