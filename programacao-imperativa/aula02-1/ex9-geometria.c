#include <stdio.h>
#include <string.h>

int main()
{
  float a, b, c;
  printf("Insira o valor de a:\n");
  scanf("%f", &a);
  printf("Insira o valor de b:\n");
  scanf("%f", &b);
  printf("Insira o valor de c:\n");
  scanf("%f", &c);

  printf("O quadrado tem area de: %.2f metros quadrados \n", a * a);
  printf("O triangulo tem area de: %.2f metros quadrados \n", (a * b) / 2);
  printf("O trapezio tem area de: %.2f metros quadrados \n", ((a + b) * c) / 2);
  return 0;
}