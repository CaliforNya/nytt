using MeteoriteProject.Context;
using System;

class Program
{
    static void Main(string[] args)
    {
        
        var context = new Context();

       
        context.SaveData("L5Meteorites.json");

      

    }
}
