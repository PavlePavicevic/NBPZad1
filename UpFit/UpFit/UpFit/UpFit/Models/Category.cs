﻿using Newtonsoft.Json;

namespace UpFit.Models
{
    public class Category
    {
        [JsonProperty("id")]
        public int ID { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }   
    }
}
