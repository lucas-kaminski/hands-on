#include <stdio.h>
int tamanho(char *str)
{
  int i = 0;
  while (str[i])
  {
    i++;
  }
  return i;
}

int main()
{
  char str[100];
  scanf("%s", str);
  printf("O tamanho de '%s' e %d", str, tamanho(str));
  return 0;
}