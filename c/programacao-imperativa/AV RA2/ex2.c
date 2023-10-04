#include <stdio.h>
#include <time.h>

int main()
{
  srand(time(NULL));

  int linhas;
  int colunas;

  printf("Digite quantas linhas:\n >");
  scanf("%d", &linhas);

  printf("Digite quantas colunas:\n >");
  scanf("%d", &colunas);

  printf("\n");

  int matriz[linhas][colunas];

  for (int i = 0; i < linhas; i++)
  {
    for (int j = 0; j < colunas; j++)
    {
      printf("Digite o valor da posicao [%d][%d]:\n >", i, j);
      scanf("%d", &matriz[i][j]);
    }
  }

  printf("\n A matriz e: \n");
  for (int i = 0; i < linhas; i++)
  {
    for (int j = 0; j < colunas; j++)
    {
      printf("%d ", matriz[i][j]);
    }
    printf("\n");
  }

  return 0;
}