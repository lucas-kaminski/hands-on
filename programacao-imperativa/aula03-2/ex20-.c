#include <stdio.h>
#include <string.h>

int main()
{
  float dinheiro, troco;
  int codProd;
  int produtos[3] = {5, 25, 50};

  printf("Digite o valor recebido em dinheiro: \n");
  scanf("%f", &dinheiro);

  printf("Os produtos disponiveis sao: %i", produtos);
  printf("Digite o codigo do produto desejado: \n");
  scanf("%i", &codProd);
}