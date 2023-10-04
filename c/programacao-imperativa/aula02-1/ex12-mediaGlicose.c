#include <stdio.h>
#include <string.h>

int main()
{
  float glicose;

  printf("Digite a quantidade de glicose em mg:\n");
  scanf("%f", &glicose);

  // printf("%f\n", glicose);

  if (glicose < 100.0)
  {
    int x = 80 < glicose < 100;
    printf("%f\n", x);
  }
  else if (glicose < 140)
  {
    printf("O nivel de glicose esta elevado");
  }
  else
  {
    printf("O nivel de glicose esta alto");
  }
}