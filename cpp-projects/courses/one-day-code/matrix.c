#include <stdio.h>
#include <stdlib.h>

int main()
{
  int linhas = 3;
  int colunas = 3;

  int **matriz;

  matriz = (int **)malloc(linhas * sizeof(int *));

  for (int i = 0; i < linhas; i++)
  {
    matriz[i] = (int *)malloc(colunas * sizeof(int));
  }

  for (int i = 0; i < linhas; i++)
  {
    for (int j = 0; j < colunas; j++)
    {
      scanf("%d", &matriz[i][j]);
    }
  }
}