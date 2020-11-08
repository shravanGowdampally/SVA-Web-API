using System;
using System.Collections.Generic;

namespace SVA_Web_API.Models
{
    public partial class Individual
    {
        public string IndividualId { get; set; }
        public string IndividualName { get; set; }
        public string IdentificationType { get; set; }
        public string IdentificationNumber { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public string IndividualAddr { get; set; }
        public string PostalCode { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDt { get; set; }
        public int Sno { get; set; }
    }
}
