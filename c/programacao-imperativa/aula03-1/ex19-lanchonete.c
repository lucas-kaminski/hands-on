#include <stdio.h>
#include <string.h>

int main()
{
  int codigoProduto, quantidade;
  float pagamento, troco, valorUnitario, valorTotal;

  printf("Digite o codigo do produto: ");
  scanf("%d", &codigoProduto);

  printf("Digite a quantidade: ");
  scanf("%d", &quantidade);

  if (codigoProduto == 1)
  {
    valorUnitario = 5.00;
    printf("O valor do produto e: R$ %.2f", valorUnitario);
    valorTotal = quantidade * 5.00;
  }
  else if (codigoProduto == 2)
  {
    valorUnitario = 5.00;
    printf("O valor do produto e: R$ %.2f", valorUnitario);
    valorTotal = quantidade * 5.00;
  }
  else if (codigoProduto == 3)
  {
    valorUnitario = 5.00;
    printf("O valor do produto e: R$ %.2f", valorUnitario);
    valorTotal = quantidade * 5.00;
  }
  else
  {
    printf("Codigo invalido");
    return 1;
  }

  printf("\nO valor total e R$ %.2f \n", valorTotal);

  printf("Qual o valor pago?: ");
  scanf("%f", &pagamento);

  if (pagamento >= valorTotal)
  {
    troco = pagamento - valorTotal;
    printf("O troco e de: %.2f", troco);
  }
  else
  {
    printf("O pagamento foi insuficiente");
  }
}