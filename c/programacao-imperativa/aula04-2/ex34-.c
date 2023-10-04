#include <stdio.h>
#include <locale.h>

int main()
{
  setlocale(LC_ALL, "Portuguese");

  int i = 1;
  float soma = 0;
  for (i; i <= 10;)
  {
    int num;
    printf("Digite o numero (%d): \n > ", i);
    scanf("%d", &num);

    if (num > 0)
    {
      soma = soma + num;
      i++;
    }
  }
  printf("MÉDIA = %.2f", (soma / 10));
}