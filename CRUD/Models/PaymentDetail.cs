using System.ComponentModel.DataAnnotations;

namespace CRUD.Models
{
    public class PaymentDetail
    {
        [Key]
        public int Id { get; set; }
        public string OwnerName { get; set; }
        public string CardNumber { get; set; }
        public string ExpirationDate { get; set; }
        public string SecurityCode { get; set; }
    }
}
