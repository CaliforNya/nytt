using System.Reflection.Metadata.Ecma335;
using System.Runtime.InteropServices.Marshalling;
using System.Security.Cryptography;
using System.Collections.Generic; 

namespace newProject;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!"); 

int minTall = 38 ;
Console.WriteLine(minTall);

string tekst = "ha en fin dag";
Console.WriteLine(tekst);

double minDoubletall = 22.22 ;
Console.WriteLine(minDoubletall);

char førsteBokstav = 'A' ;
Console.WriteLine(førsteBokstav);

int[] minArray = { 1,2,3,4,5,6,7,8,9,10};
for (int i = 0; i < minArray.Length; i++)
{
    Console.WriteLine(i);
}

string[] fruktArray = { "blåbær", "eple", "banan", "appelsin","kiwi", "pære", "mango" };
foreach (string frukt in fruktArray)
{ 
    Console.WriteLine(frukt);
}
List<string> fruktList= new List<string>();

        fruktList.Add("blåbær");
        fruktList.Add("eple");
        fruktList.Add("banan");
        fruktList.Add("appelsin");
        fruktList.Add("kiwi");
        fruktList.Add("pære");

        foreach (string frukt in fruktList)
        {
            Console.WriteLine(frukt);
        }

}
}
