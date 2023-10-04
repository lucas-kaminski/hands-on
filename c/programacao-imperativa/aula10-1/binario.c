#include <stdio.h>
#include <stdlib.h>
#include <time.h>
void binario(int n)
{
  if (n == 0)
    printf("%i", n);
  else
  {
    binario(n / 2);
    printf("%i", n % 2);
  }
}
int main()
{
  int n;
  printf("Digite um valor Decimal: \n > ");
  scanf("%i", &n);
  binario(n);
  return 0;
}