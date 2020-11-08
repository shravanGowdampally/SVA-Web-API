using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SVA_Web_API.Models;



using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

namespace SVA_Web_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("AllowOrigin")]
    public class IndividualsController : ControllerBase
    {
        private readonly SVADBContext _context;

        public IndividualsController(SVADBContext context)
        {
            _context = context;
        }

        // GET: api/Individuals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Individual>>> GetIndividual()
        {
            return await _context.Individual.ToListAsync();
        }

        // GET: api/Individuals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Individual>> GetIndividual(string id)
        {
            var individual = await _context.Individual.FindAsync(id);

            if (individual == null)
            {
                return NotFound();
            }

            return individual;
        }

        // PUT: api/Individuals/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIndividual(string id, Individual individual)
        {
            if (id != individual.IndividualId)
            {
                return BadRequest();
            }

            _context.Entry(individual).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IndividualExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Individuals
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Individual>> PostIndividual(Individual individual)
        {
            _context.Individual.Add(individual);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (IndividualExists(individual.IndividualId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetIndividual", new { id = individual.IndividualId }, individual);
        }

        // DELETE: api/Individuals/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Individual>> DeleteIndividual(string id)
        {
            var individual = await _context.Individual.FindAsync(id);
            if (individual == null)
            {
                return NotFound();
            }

            _context.Individual.Remove(individual);
            await _context.SaveChangesAsync();

            return individual;
        }

        private bool IndividualExists(string id)
        {
            return _context.Individual.Any(e => e.IndividualId == id);
        }
    }
}
