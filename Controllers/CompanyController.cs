using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SVA_Web_API.Models;

namespace SVA_Web_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("AllowOrigin")]
    public class CompanyController : ControllerBase
    {     

        private readonly ILogger<CompanyController> _logger;

        public CompanyController(ILogger<CompanyController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Company> Get()
        {
           using(var context = new SVADBContext())
            {
                return context.Company.ToList();

                //To add a company
                //Company c = new Company();
                //c.Address = "";
                //context.Company.Add(c);
                //context.SaveChanges();

                //To update a company
                //Company c = context.Company.where(x => x.name="").FirstOrDefault();
                //c.Address = "123";               
                //context.SaveChanges();

                //To delete a company
               // context.Company.Remove(c);
                //context.SaveChanges();
            }
        }
    }
}
