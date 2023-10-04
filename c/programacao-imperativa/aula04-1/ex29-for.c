#include <stdio.h>
#include <string.h>

int main()
{
  int i;
  int valor;

  printf("Digite o numero: ");
  scanf("%d", &valor);

  for (i = 1; i <= 10; i++)
  {
    printf("%d x %d = %d \n", i, valor, i * valor);
  }

  return 0;
}