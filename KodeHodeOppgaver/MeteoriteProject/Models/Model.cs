
using System;
using System.Text.Json.Serialization;


namespace MeteoriteProject.Models
{
    public class Meteorite
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("nametype")]
        public string NameType { get; set; }

        [JsonPropertyName("recclass")]
        public string RecClass { get; set; }

        [JsonPropertyName("mass")]
        public string Mass { get; set; }

        [JsonPropertyName("fall")]
        public string Fall { get; set; }

        [JsonPropertyName("year")]
        public DateTime Year { get; set; }

        [JsonPropertyName("reclat")]
        public string Reclat { get; set; } 

        [JsonPropertyName("reclong")]
        public string Reclong { get; set; } 

        [JsonPropertyName("geolocation")]
        public Geolocation Geolocation { get; set; }
    }

    public class Geolocation
    {
        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("coordinates")]
        public double[] Coordinates { get; set; }
    }
}
