using MeteoriteProject.Context;
using System;

class Program
{
    static void Main(string[] args)
    {
        // Utworzenie instancji klasy Context
        var context = new Context();

        // Wywołanie metody SaveData, która tworzy plik JSON z meteorytami klasy L5
        context.SaveData("L5Meteorites.json");

      

    }
}
