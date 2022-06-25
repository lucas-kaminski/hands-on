#include <stdlib.h>
#include <stdio.h>

#define TAMANHO_PADRAO 10 // Definindo constantes

void main()
{
  int a = 1;

  while (a <= TAMANHO_PADRAO)
  {
    printf("%d \n", a);
    a++; // 'Atua' e após incrementa
  }

  a = 20;

  do // Primeiro executa e depois faz a comparação
  {
    printf("%d \n", a);
    ++a;
  } while (a <= 10);

  printf("\nTabuada do cinco de dois em dois: \n");
  for (int i = 0; i <= 10; i = i + 2) // Defini, condiciona e incrementa
  {
    printf("5 X %d = %d \n", i, i * 5);
  }

  int opcao;
  scanf("%d", &opcao);

  switch (opcao)
  {
  case 1:
    printf("Opcao 1 \n");
    break;
  case 2:
    printf("Opcao 2 \n");
    break;
  case 3:
    printf("Opcao 3 \n");
    break;
  default:
    printf("Opcao invalida \n");
    break;
  }
}