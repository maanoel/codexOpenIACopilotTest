using System;

namespace MyApplication
{
  enum Level
  {
    Low,
    Medium,
    High
  }
  
  class Program
  {
    static void Main(string[] args)
    {
      Level myVar = Level.Medium;
      Level teste = (Level) 'P';

      // O cast explícito permite adicionar um valor que não existe no enum, tomar 
      // Cuidado com esse tipo de cast	
      
      Console.WriteLine(myVar);
    }
  }
}