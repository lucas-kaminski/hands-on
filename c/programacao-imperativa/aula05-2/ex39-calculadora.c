#include <stdio.h>
#include <locale.h>

void calculadora();

void calculadora(float num1, float num2)
{
  printf("Soma: %.2f\n", num1 + num2);
  printf("Subtracao: %.2f\n", num1 - num2);
  printf("Multiplicacao: %.2f\n", num1 * num2);
  printf("Divisao: %.2f\n", num1 / num2);
}

int main()
{
  float num1, num2;
  setlocale(LC_ALL, "Portuguese");

  printf("Digite o primeiro numero: ");
  scanf("%f", &num1);

  printf("Digite o segundo numero: ");
  scanf("%f", &num2);

  calculadora(num1, num2);
  return 0;
}