#include <stdio.h>
#include <stdlib.h> // random
#include <time.h>   // seed
int main()
{
  int valor1, valor2;
  srand(time(NULL)); // seed
  printf("Quantas linhas? \n > ");
  scanf("%i", &valor1);
  printf("Quantas colunas? \n > ");
  scanf("%i", &valor2);
  int vet1[valor1][valor2];
  for (int i = 0; i < valor1; i++)
  {
    for (int j = 0; j < valor2; j++)
    {
      vet1[i][j] = rand() % 100;
    }
  }
  printf("\nMatriz: ");
  for (int i = 0; i < valor1; i++)
  {
    printf("\n");
    for (int j = 0; j < valor2; j++)
    {
      printf("%3d ", vet1[i][j]);
    }
  }
  printf("\n");
  int soma = 0;
  for (int i = 0; i < valor1; i++)
  {
    for (int j = 0; j < valor2; j++)
    {
      soma += vet1[i][j];
    }
    printf("\nSoma da linha %d: %d", i, soma);
    soma = 0;
  }
  printf("\n");
  soma = 0;
  for (int i = 0; i < valor2; i++)
  {
    for (int j = 0; j < valor1; j++)
    {
      soma += vet1[j][i];
    }
    printf("\nSoma da coluna %d: %d", i, soma);
    soma = 0;
  }
  return 0;
}