#include <stdio.h>

int main()
{

  int n, x;

  printf("Quantos valores no primeiro vetor?\n > ");

  scanf("%i", &n);

  printf("Quantos valores no segundo vetor?\n > ");

  scanf("%i", &x);

  int vetor1[n], vetor2[x];

  printf("\nVetor 1: ");

  for (int i = 0; i < n; i++)
  {

    vetor1[i] = rand() % 100;

    printf(" %i ", vetor1[i]);
  }

  printf("\nVetor 2: ");

  for (int i = 0; i < x; i++)
  {

    vetor2[i] = rand() % 100;

    printf(" %i ", vetor2[i]);
  }

  return 0;
}