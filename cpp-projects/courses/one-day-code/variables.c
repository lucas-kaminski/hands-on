#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define TAM 10 // Definindo constantes

void main()
{
  int a = 5;
  int b;
  printf("O valor de a: %d \n", a);
  a = 15;
  printf("Agora o valor de a: %d \n", a);

  // scanf("%d", &b);
  // printf("O valor de b: %d \n", b);

  float c = 252.1018;
  printf("O valor de c: %f ou %.10f ou %.2f \n", c, c, c);

  char d = 'a'; // Char é entre aspas simples
  printf("O valor de d: %c \n", d);
  printf("O valor ASCII de d: %d \n", d);
  // scanf(" %d", &d); // Precisa do espaço em scanf de char
  // printf("O valor de d: %c \n", d);

  bool e = true; // true = 1 | false = 0
  printf("O valor de e: %d \n", e);

  int intE = 10, intF = 5;
  float floG = 10.1, floH = 5.5;

  printf("Soma types iguais: %d, Soma types diferentes: %.2f \n", intE + intF, intE + floH);

  printf("Subtracao types iguais: %d, Subtracao types diferentes: !!CERTO: %.2f  ERRADO: %d !! \n", intE - intF, intE - floH, intE - floH);

  printf("Multiplicacao types iguais: %d, Multiplicacao types diferentes: %.2f \n", intE * intF, intE * floH);

  printf("Divisao types iguais: %d, Divisao types diferentes: %.2f \n", intE / intF, intE / floH);

  printf("O valor absoluto de -3: %d \n", abs(-3));

  system("pause");
}