#include <stdio.h>
#include <stdlib.h>
#include <new>

void imprimeVetor(int *v, int tam);

int main()
{
  int tamanho, cont;

  printf("Digite o tamanho do vetor: ");
  scanf("%d", &tamanho);

  int *vetor = new int[tamanho];

  for (cont = 0; cont < tamanho; cont++)
  {
    printf("Digite o valor do vetor: ");
    scanf("%d", &vetor[cont]);
  }

  imprimeVetor(vetor, tamanho);
}

void imprimeVetor(int *v, int tam)
{
  for (int i = 0; i < tam; i++)
  {
    printf("%d ", v[i]);
  }
}