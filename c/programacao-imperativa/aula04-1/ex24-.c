#include <stdio.h>
#include <string.h>

int main()
{
  int idadeMedia, idade = 0;
  int numPessoas = 0;

  while (idade >= 0)
  {
    printf("Digite a idade de uma pessoa. (Para sair, digite de 0) \n");
    scanf("%f", &idade);

    printf("o total e %f \n", idadeMedia);
    printf("o n e %d \n", numPessoas);
  }
  printf("A media e: %.2f \n", (idadeMedia / numPessoas));
}