#include <stdio.h>
#include <string.h>

int main()
{
  int cod;
  int gasolina = 0;
  int alcool = 0;
  int diesel = 0;

  printf(" 1 - Alcool \n 2 - Gasolina \n 3 - Diesel \n 4 - Sair");
  while (cod != 4)
  {
    printf("\nDigite o codigo do combustivel: \n");
    scanf("%d", &cod);
    if (cod == 1)
    {
      alcool = alcool + 1;
      printf("Alcool adicionado");
    }
    else if (cod == 2)
    {
      gasolina = gasolina + 1;
      printf("Gasolina adicionada");
    }
    else if (cod == 3)
    {
      diesel = diesel + 1;
      printf("Diesel adicionado");
    }
    else
    {
      printf("Codigo invalido!\n");
    }
  }
  printf("Quantidade de litros de gasolina: %d\n", gasolina);
  printf("Quantidade de litros de alcool: %d\n", alcool);
  printf("Quantidade de litros de diesel: %d\n", diesel);
}