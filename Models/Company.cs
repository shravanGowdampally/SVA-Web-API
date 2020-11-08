using System;
using System.Collections.Generic;

namespace SVA_Web_API.Models
{
    public partial class Company
    {
        public string Uen { get; set; }
        public string FileNumber { get; set; }
        public string CompanyName { get; set; }
        public string FormerlyKn { get; set; }
        public DateTime? IncorpDt { get; set; }
        public string YearEnd { get; set; }
        public string Address { get; set; }
        public string PostalCode { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Activity1 { get; set; }
        public string Activity2 { get; set; }
        public string Remarks { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDt { get; set; }
        public bool IsActive { get; set; }
        public string CompanyId { get; set; }
        public string FnumPrefix { get; set; }
        public string FnumSuffix { get; set; }
        public int Sno { get; set; }
    }
}
