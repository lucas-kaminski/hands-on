#include <stdlib.h>
#include <stdio.h>

void main()
{
  int a = 5;
  int testTrue = 1;
  int testFalse = 0;

  char x = 'x';

  if (a > 10)
  {
    printf("O numero é maior que dez \n");
  }
  else if (a >= 8)
  {
    printf("O numero esta entre oito e dez \n");
  }
  else
  {
    printf("É um número");
  }

  if (testTrue)
  {
    printf("O teste é verdadeiro \n");
  }

  if (testFalse)
  {
    printf("Jamais alcançado \n");
  }

  if (!testFalse)
  {
    printf("O teste é verdadeiro pois faz a negação \n");
  }

  // ASCII
  if (x == 'x' && x == 120) // AND
  {
    printf("O caractere é x \n");
  }

  int j = 15;

  if ((j > 10 && j <= 15) || j == 2) // OR
  {
    printf("O numero esta entre 10 e 15 ou é igual a 2 \n");
  }

  system("pause");
}