#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define LINHAS 5
#define COLUNAS 5

int main()
{
  srand(time(NULL));

  int matriz[LINHAS][COLUNAS];

  for (int i = 0; i < LINHAS; i++)
  {
    for (int j = 0; j < COLUNAS; j++)
    {
      matriz[i][j] = rand() % 10;
    }
  }

  printf("Matriz gerada aleatoriamente: \n");

  for (int i = 0; i < LINHAS; i++)
  {
    for (int j = 0; j < COLUNAS; j++)
    {
      printf("%d ", matriz[i][j]);
    }
    printf("\n");
  }

  printf("\n");

  // a soma de cada linha
  for (int i = 0; i < LINHAS; i++)
  {
    int soma = 0;
    for (int j = 0; j < COLUNAS; j++)
    {
      soma += matriz[i][j];
    }
    printf("Soma da linha %d: %d\n", i, soma);
  }

  printf("\n");

  // a soma de cada coluna
  for (int j = 0; j < COLUNAS; j++)
  {
    int soma = 0;
    for (int i = 0; i < LINHAS; i++)
    {
      soma += matriz[i][j];
    }
    printf("Soma da coluna %d: %d\n", j, soma);
  }

  printf("\n");

  return 0;
}