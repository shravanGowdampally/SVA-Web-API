using System;
using System.Collections.Generic;

namespace SVA_Web_API.Models
{
    public partial class ManageFiles
    {
        public int Id { get; set; }
        public string CompanyId { get; set; }
        public string GoodleDriveFolderId { get; set; }
        public string FileName { get; set; }
        public string GoodleDriveFileId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDt { get; set; }
        public bool IsActive { get; set; }
    }
}
