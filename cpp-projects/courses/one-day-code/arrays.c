#include <stdlib.h>
#include <stdio.h>

int *alocaVetor();

int main()
{
  int vetor[3];

  vetor[0] = 1;

  for (int i = 1; i <= 2; i++)
  {
    scanf("%d", &vetor[i]);
  }

  int *vetorVariavel;

  vetorVariavel = alocaVetor(3);

  for (int i = 0; i <= 2; i++)
  {
    scanf("%d", &vetorVariavel[i]);
  }

  for (int i = 0; i <= 2; i++)
  {
    printf("%d\n", vetor[i]);
  }

  free(vetorVariavel);

  return 0;
}

int *alocaVetor(int tamanho)
{
  // Criado um ponteiro auxiliar
  int *aux;

  aux = (int *)malloc(tamanho * sizeof(int)); // Alocação de memória do tamanho vezes o tamanho do inteiro (retornando um ponteiro do tipo inteiro)

  return aux;
}
