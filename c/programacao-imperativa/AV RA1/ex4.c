#include <stdio.h>

int main()
{
  int n;
  int i;
  float soma = 0;

  printf("Digite quantos produtos serao lancados: \n > ");
  scanf("%d", &n);

  for (i = 0; i < n; i++)
  {
    float valor;
    printf("Digite o produto %d: \n > ", i + 1);
    scanf("%f", &valor);

    soma += valor;
  }

  printf("\nA soma dos produtos e: %.2f\n", soma);

  return 0;
}