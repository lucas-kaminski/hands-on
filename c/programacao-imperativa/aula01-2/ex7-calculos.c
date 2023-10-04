#include <stdio.h>
#include <string.h>

int main()
{
  float preco, dinheiro;
  int quantidade;

  printf("Informe o preco do produto: ");
  scanf("%f", &preco);

  printf("Informe a quantidade comprada: ");
  scanf("%d", &quantidade);

  printf("Informe o valor pago: ");
  scanf("%f", &dinheiro);

  if (dinheiro < preco * quantidade)
  {
    printf("Valor pago nao suficiente!\n");
  }
  else
  {
    printf("O troco é de: %.2f\n", dinheiro - (preco * quantidade));
  }

  return 0;
}