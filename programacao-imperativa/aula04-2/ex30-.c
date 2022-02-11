#include <stdio.h>
#include <string.h>

int main()
{
  int casos;

  printf("Quantos casos você vai digitar?");
  scanf("%d", &casos);

  int i;
  for (i = 1; i <= casos; i++)
  {
    float num1, num2, num3;

    printf("Digite o primeiro número: \n");
    scanf("%f", &num1);
    printf("Digite o segundo número: \n");
    scanf("%f", &num2);
    printf("Digite o terceiro número: \n");
    scanf("%f", &num3);

    printf("MÉDIA = %.2f \n", (num1 + num2 + num3) / 3);
  }
}