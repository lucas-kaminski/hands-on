#include <stdio.h>
#include <locale.h>

int main()
{
  int i, j;
  float soma;

  printf("Quantos produtos serao calculados a media? \n > ");
  scanf("%d", &i);

  float produtos[i];

  for (j = 0; j < i; j++)
  {
    float valor;
    printf("Digite o valor do produto %d: \n > ", j + 1);
    scanf("%f", &valor);
    produtos[j] = valor;
    soma += valor;
  }

  float media = soma / i;
  printf("A media dos produtos e: %.2f", media);

  printf("\nProdutos que ficaram abaixo da media: \n");
  for (j = 0; j < i; j++)
  {
    if (produtos[j] < media)
    {
      printf("Produto %d: %.2f \n", j + 1, produtos[j]);
    }
  }

  return 0;
}