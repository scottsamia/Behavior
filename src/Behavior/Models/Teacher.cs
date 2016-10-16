using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Behavior.Models
{
    public class Teacher : ApplicationUser
    {
        public int ID { get; set; }
        public string Class { get; set; }
    }
}
