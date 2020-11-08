using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SVA_Web_API.Models
{
    public partial class SVADBContext : DbContext
    {
        public SVADBContext()
        {
        }

        public SVADBContext(DbContextOptions<SVADBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Company> Company { get; set; }
        public virtual DbSet<Individual> Individual { get; set; }
        public virtual DbSet<ManageFiles> ManageFiles { get; set; }
        public virtual DbSet<Positions> Positions { get; set; }
        public virtual DbSet<PositionsMaster> PositionsMaster { get; set; }
        public virtual DbSet<ShareHolders> ShareHolders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=localhost\\SQLExpress;Database=SVADB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Company>(entity =>
            {
                entity.HasKey(e => e.Sno)
                    .HasName("PK_tblCompany");

                entity.Property(e => e.Sno).HasColumnName("SNO");

                entity.Property(e => e.Activity1).IsUnicode(false);

                entity.Property(e => e.Activity2).IsUnicode(false);

                entity.Property(e => e.Address)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyId)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDt).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FileNumber)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.FnumPrefix)
                    .HasColumnName("FNum_Prefix")
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.FnumSuffix)
                    .HasColumnName("FNum_Suffix")
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.FormerlyKn)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.IncorpDt).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDt).HasColumnType("datetime");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PostalCode)
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks).IsUnicode(false);

                entity.Property(e => e.Uen)
                    .HasColumnName("UEN")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.YearEnd)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Individual>(entity =>
            {
                entity.Property(e => e.IndividualId).HasMaxLength(15);

                entity.Property(e => e.ContactNumber).HasMaxLength(20);

                entity.Property(e => e.CreatedBy).HasMaxLength(15);

                entity.Property(e => e.CreatedDt).HasColumnType("datetime");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.ExpiryDate).HasColumnType("datetime");

                entity.Property(e => e.IdentificationNumber)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.IdentificationType)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.IndividualAddr).HasMaxLength(1000);

                entity.Property(e => e.IndividualName)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.ModifiedBy).HasMaxLength(15);

                entity.Property(e => e.ModifiedDt).HasColumnType("datetime");

                entity.Property(e => e.PostalCode).HasMaxLength(10);

                entity.Property(e => e.Sno)
                    .HasColumnName("SNO")
                    .ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<ManageFiles>(entity =>
            {
                entity.Property(e => e.CompanyId)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDt).HasColumnType("datetime");

                entity.Property(e => e.FileName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.GoodleDriveFileId)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.GoodleDriveFolderId)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDt).HasColumnType("datetime");
            });

            modelBuilder.Entity<Positions>(entity =>
            {
                entity.HasKey(e => e.PoId)
                    .HasName("PK_tblpositions");

                entity.Property(e => e.PoId)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.AppoitmentDt).HasColumnType("datetime");

                entity.Property(e => e.CessationDt).HasColumnType("datetime");

                entity.Property(e => e.CompanyId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDt).HasColumnType("datetime");

                entity.Property(e => e.IndividualId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.Property(e => e.ModifidedDt).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.PoCode)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.Sno)
                    .HasColumnName("SNO")
                    .ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<PositionsMaster>(entity =>
            {
                entity.HasKey(e => e.PoCode)
                    .HasName("PK_tblPositionsMaster");

                entity.Property(e => e.PoCode)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.PoName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ShareHolders>(entity =>
            {
                entity.Property(e => e.Address)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyId)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDt).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDt).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.PercentageOfShres).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
