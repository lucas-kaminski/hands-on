#include <stdio.h>
#include <string.h>

int main()
{
  float nota1, nota2;

  printf("Entre com a primeira nota:\n");
  scanf("%f", &nota1);
  printf("Entre com a segunda nota:\n");
  scanf("%f", &nota2);

  float notaFinal = (nota1 + nota2) / 2;
  printf("A sua media e: %f\n", notaFinal);

  if (notaFinal >= 7.0)
  {
    printf("Aprovado\n");
  }
  else
  {
    printf("Reprovado\n");
  }
}