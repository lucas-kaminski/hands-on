#include <stdio.h>
#include <string.h>

int main()
{
  float n1, n2, n3;

  printf("Digite 3 numeros: ");
  scanf("%f %f %f", &n1, &n2, &n3);

  if (n1 < n2 && n1 < n3)
  {
    printf("O menor numero e %.1f\n", n1);
  }
  else if (n2 < n1 && n2 < n3)
  {
    printf("O menor numero e %.1f\n", n2);
  }
  else if (n3 < n1 && n3 < n2)
  {
    printf("O menor numero e %.1f\n", n3);
  }
  else
  {
    printf("Dois ou mais numeros sao iguais\n");
  }
}
