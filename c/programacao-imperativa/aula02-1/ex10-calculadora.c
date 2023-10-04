#include <stdio.h>
#include <string.h>

int main()
{
  float num1, num2;

  printf("Entre com o primeiro numero:\n");
  scanf("%f", &num1);

  printf("Entre com o segundo numero:\n");
  scanf("%f", &num2);

  printf("A soma destes numeros e: %f \n", num1 + num2);
  printf("A subtracao destes numeros e: %f \n", num1 - num2);
  printf("A multiplicacao destes numeros e: %f \n", num1 * num2);
  printf("A divisao do primeiro sobre o segundo numero e: %f \n", num1 / num2);
  printf("A divisao do segundo sobre o primeiro numero e: %f \n", num2 / num1);
}