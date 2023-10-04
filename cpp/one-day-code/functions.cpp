#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

void limpaTela();
int somaInteiro();
int aumentaDez();
float somaFloat();
char retornaX();
bool verificaPar();

void imprimeVetor();

void limpaTela()
{
  system("CLS");
}

int somaInteiro(int a, int b) // Funções assim retornam um valor para ser assinado a uma variável
{
  return a + b;
};

void aumentaDez(int *a) // Funções assim não retornam um valor, mas sim alteram o valor diretamente de uma variável pelo ponteiro
{
  printf("\nAntes: %d %d %d", *a, a, &a);
  *a = *a + 10;
};

float somaFloat(float a, float b)
{
  return a + b;
}

char retornaX()
{
  // return 120 (pode retornar o valor ASCII)
  return 'x';
}

bool verificaPar(int numero)
{
  if (numero % 2 == 0)
  {
    return true;
  }
  else
  {
    return false;
  };
};

void imprimeVetor(int *v, int tam)
{
  for (int i = 0; i < tam; i++)
  {
    printf("%d ", v[i]);
  }
}

int main()
{
  printf("Hello, World!");
  limpaTela();
  printf("Hello, World (2)!");

  int somaInteiro_result = somaInteiro(1, 2);
  printf("\nSoma: %d", somaInteiro_result);

  limpaTela();

  int a = 1;
  printf("\nA: %d %d", a, &a);
  aumentaDez(&a);

  int vetor[3] = {1, 2, 3};

  return 0;
}