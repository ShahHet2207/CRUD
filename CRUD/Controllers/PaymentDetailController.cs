using CRUD.Context;
using CRUD.Models;
using Microsoft.AspNetCore.Mvc;

namespace CRUD.Controllers
{
    [Route("api")]
    [ApiController]
    public class PaymentDetailController : Controller
    {
        private readonly DefaultContext _context;
        public PaymentDetailController(DefaultContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("get")]
        public IActionResult GetAll()
        {
            return Ok(_context.PaymentDetail.ToList());
        }

        [HttpGet]
        [Route("getbyid")]
        public IActionResult Get(long id)
        {
            return Ok(_context.PaymentDetail.Where(x => x.Id == id).FirstOrDefault());
        }

        [HttpPost]
        [Route("post")]
        public IActionResult AddData(PaymentDetail data)
        {
            try
            {
                _context.PaymentDetail.Add(data);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return Ok(data);
        }

    }
}
