using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Behavior.Models
{
    public class FirebaseConfig
    {
        public string apiKey { get; set; }
        public string authDomain { get; set; }
        public string databaseURL { get; set; }
        public string storageBucket { get; set; }
        public string messagingSenderId { get; set; }
    }
}
