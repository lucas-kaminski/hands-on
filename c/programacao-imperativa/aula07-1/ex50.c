#include <stdio.h>

int main()
{
  int n, i;
  float count, media;

  printf("Quantos elementos vai ter o vetor? \n > ");
  scanf("%d", &n);
  char vetor[n], vetorImpar[n];

  for (i = 0; i < n; i++)
  {
    printf("Digite o %d numero: \n > ", i + 1);
    scanf("%d", &vetor[i]);
    count = count + vetor[i];
  }

  media = count / n;

  printf("Media: %.2f", media);
  printf("\n\n Os valores abaixo da media sao: ");
  for (i = 0; i < n; i++)
  {
    if (vetor[i] < media)
    {
      printf("\n %d", vetor[i]);
    }
  }

  return 0;
}