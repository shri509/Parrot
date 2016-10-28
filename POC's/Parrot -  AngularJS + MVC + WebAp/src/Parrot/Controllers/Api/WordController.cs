using Microsoft.AspNetCore.Mvc;
using Parrot.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parrot.Controllers.Api
{
    [Route("/api/word/getrelatedwords")]
    public class WordController : Controller
    {
        public JsonResult GetRelatedWords()
        {
            var word = new List<Word>()
            {
                new Word { Id=2, Name="Garden", Description="Place to play or grow plants" },
                new Word { Id=3, Name="PlayGround", Description="Place to play" }
            };
            return Json(word);
        }
    }
}
