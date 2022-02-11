#include <stdio.h>

int main()
{
  int escolha;

  char produto[3][100] = {"Cachorro quente", "Hamburguer", "Pizza"};

  do
  {

    printf("Produtos: \n 1 - Cachorro Quente \n 2 - Hamburguer \n 3 - Pizza \n");
    printf("Digite o codigo do produto ou 0 para sair: \n > ");
    scanf("%d", &escolha);

    if (escolha != 0)
    {
      printf("\n Comprou: %s \n \n \n", produto[escolha]);
    }
    else
    {
      printf("\n Fim do programa \n");
    }
  } while (escolha != 0);
  return 0;
}