using System;
using System.Collections.Generic;

namespace SVA_Web_API.Models
{
    public partial class ShareHolders
    {
        public int Id { get; set; }
        public string CompanyId { get; set; }
        public string Name { get; set; }
        public int? NumOfShares { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDt { get; set; }
        public bool IsActive { get; set; }
        public decimal? PercentageOfShres { get; set; }
    }
}
