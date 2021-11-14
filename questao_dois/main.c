// Escreva um programa em linguagem C/C++ ou Java que:
// * imprime cada número de 1 até 100 em uma nova linha.
//  * Para cada múltiplo de 3, imprima "Foo", ao invés do número.
//  * Para cada múltiplo de 5, imprima "Baa", ao invés do número.
//  * Para números múltiplos simultaneamente de 3 e 5, imprima "FooBaa", ao invés do número.
// A sua solução deverá ser utilizando o menor número de linhas de código possível porém deve produzir um código eficiente.

#include <stdio.h>

int main()
{
  int i;
  char str[3];

  for (i = 0; i < 100; i++)
  {
    sprintf(str, "%d", i);
    printf("%s\n", i % 3 == 0 ? (i % 5 == 0 ? "FooBaa" : "Foo") : (i % 5 == 0 ? "Baa" : str));
  }

  return 0;
}