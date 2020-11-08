using System;
using System.Collections.Generic;

namespace SVA_Web_API.Models
{
    public partial class Positions
    {
        public string PoId { get; set; }
        public string CompanyId { get; set; }
        public string IndividualId { get; set; }
        public string PoCode { get; set; }
        public DateTime AppoitmentDt { get; set; }
        public DateTime? CessationDt { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? CreationDt { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifidedDt { get; set; }
        public int Sno { get; set; }
    }
}
