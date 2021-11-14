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
  printf("Digite uma string: ");
  gets(str);
  printf("O tamanho de '%s' e %d segundo a minha funcao", str, tamanho(str));
  return 0;
}