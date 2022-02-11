#include <stdio.h>
#include <stdlib.h>
#include <time.h>

typedef struct
{
  int dia;
  int mes;
  int ano;
} Data;

void imprimeTela(Data *vetor)
{
  for (int i = 0; i < 5; i++)
  {
    printf("%d/%d/%d\n", vetor[i].dia, vetor[i].mes, vetor[i].ano);
  }
}

int main()
{
  srand(time(NULL));

  Data datas[5];

  for (int i = 0; i < 5; i++)
  {
    datas[i].dia = rand() % 31 + 1;
    datas[i].mes = rand() % 12 + 1;
    datas[i].ano = rand() % 2021 + 1;
  }

  imprimeTela(datas);

  return 0;
}