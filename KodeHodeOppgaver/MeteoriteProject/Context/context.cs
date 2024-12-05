using System;
using System.Linq; 
using System.Text.Json;
using MeteoriteProject.Models;
using System.IO;

namespace MeteoriteProject.Context
{
    public class Context
    {
        
        public List<Meteorite> Meteorites { get; set; }

        public Context()
        {
            var json = File.ReadAllText("meteorites.json");
            Meteorites = JsonSerializer.Deserialize<List<Meteorite>>(json);
        }

        // JSON med bare L5 cl
        public void SaveData(string newFilePath)
        {
            var L5Meteorites = Meteorites
                                .Where(n => n.RecClass == "L5")
                                .Select(n => new { n.Name })
                                .ToList();

                 Console.WriteLine(L5Meteorites.Count);               

            var options = new JsonSerializerOptions();
            var json = JsonSerializer.Serialize(L5Meteorites, options);

            File.WriteAllText(newFilePath, json);
        }
    }
}
