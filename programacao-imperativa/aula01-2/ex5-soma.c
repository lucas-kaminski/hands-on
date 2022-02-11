#include <stdio.h>
#include <string.h>

int main()
{
  int valor1, valor2, valor3, valorTotal;

  printf("Insira o primeiro valor:");
  scanf("%i", &valor1);

  printf("Insira o segundo valor:");
  scanf("%i", &valor2);

  printf("Insira o terceiro valor:");
  scanf("%i", &valor3);

  valorTotal = valor1 + valor2 + valor3;
  printf("O valor total e: %i", valorTotal);

  return 0;
}