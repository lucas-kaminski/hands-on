#include <stdio.h>

int main()
{
  int senha;
  printf("Digite a senha: ");
  scanf("%d", &senha);

  if (senha == 3378745)
  {
    printf("Bem vindo ao sistema!\n");
  }
  else
  {
    printf("Senha incorreta!\n");
  }

  return 0;
}