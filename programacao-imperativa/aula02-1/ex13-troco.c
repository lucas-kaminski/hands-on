#include <stdio.h>
#include <string.h>

int main()
{
  float preco, total, recebido;
  int quantidade;

  printf("Preco: ");
  scanf("%f", &preco);

  printf("Quantidade: ");
  scanf("%d", &quantidade);

  printf("Recebido: ");
  scanf("%f", &recebido);

  total = preco * quantidade;

  if (recebido >= total)
  {
    printf("Troco: %.2f\n", recebido - total);
  }
  else
  {
    printf("Valor recebido insuficiente para compra\n");
  }
}