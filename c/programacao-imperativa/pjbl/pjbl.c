#include <stdio.h>
#include <string.h>

char itens[10][50] = {"Couve-flor", "Alface", "Caju", "Caqui", "Mexirica", "Gengibre", "Jilo", "Cenoura", "Ouro", "Diamante"};
float precos[10] = {5.00, 2.50, 10.50, 5.20, 2.25, 7.80, 20.00, 0.50, 200.00, 300.00};

float somaCarinho = 0;
float tamanhoCarinho = 0;
float itensCarrinho[10];

float valorFinal = 0;

int menuCarrinho();
int menuFinanceiro();
int listarProdutos();
int cadastrarProduto();
int realizarPagamento();

int main()
{
  printf("\n Bem-vindo ao mercado verde! \n");
  int menu = 0;

  do
  {
    printf("\n Menu: \n 1 - Lista de produtos disponiveis \n 2 - Realizar uma compra \n 3 - Sair \n > ");
    scanf("%d", &menu);

    switch (menu)
    {
    case 1:
      listarProdutos();
      break;
    case 2:
      menuCarrinho();
      break;
    case 3:
      printf("\n Obrigado por usar o mercado verde! \n");
      break;
    }
  } while (menu != 3);
  return 0;
}

int menuCarrinho()
{
  int menu = 0;
  do
  {
    printf("\n Menu - Carrinho: \n 1 - Adicionar produto \n 2 - Finalizar compra \n 3 - Listar produtos novamente \n 4 - Sair do carrinho \n > ");
    scanf("%d", &menu);

    switch (menu)
    {
    case 1:
      cadastrarProduto();
      break;
    case 2:
      if (somaCarinho > 0)
      {
        menuFinanceiro();
      }
      else
      {
        printf("\n Nenhum produto foi adicionado ao carrinho! \n");
      }
      break;
    case 3:
      listarProdutos();
      break;
    }

  } while (menu != 4);
  return 0;
}

int menuFinanceiro()
{
  int menu = 0;
  valorFinal = somaCarinho;
  if (tamanhoCarinho >= 3)
  {
    printf("\n Devido a ter mais de tres itens no carrinho, voce ganhou 5%% de desconto!");
    valorFinal = somaCarinho * 0.95;
  }
  printf("\n Valor final do carrinho: %.2f \n", valorFinal);

  while (menu != 2)
  {
    printf("\n Menu - Financeiro: \n 1 - Realizar pagamento \n 2 - Voltar ao menu \n > ");
    scanf("%d", &menu);
    switch (menu)
    {
    case 1:
      if (realizarPagamento() == 0)
      {
        printf("\n\n ***Iniciado novo carrinho!*** \n\n");
        menu = 2;
      }
      break;
    }
  }
}

int listarProdutos()
{
  printf("\n ** Produtos disponiveis ** \n");
  for (int i = 0; i < 10; i++)
  {
    printf("%d - %s - %.2f R$ \n", i + 1, itens[i], precos[i]);
  }
  return 0;
};

int cadastrarProduto()
{
  int produto = 0;
  int quantidade = 0;
  do
  {
    printf("\n Insira o codigo do produto: ");
    scanf("%d", &produto);

    if (produto >= 1 && produto <= 10)
    {
      if (produto != 0 && itensCarrinho[produto - 1] == 1)
      {
        printf("\n Aproveite a promocao e leve mais deste produto! \n");
      }
      else
      {
        itensCarrinho[produto - 1] = 1;
        tamanhoCarinho++;
      }

      printf("\n Insira a quantidade: ");
      scanf("%d", &quantidade);
      if (quantidade > 0)
      {
        float valor = quantidade * precos[produto - 1];
        somaCarinho += valor;

        printf("\n\nProduto escolhido: %s \n", itens[produto - 1]);
        printf("Valor: %.2f \n", precos[produto - 1]);
        printf("Valor a ser pago no produto: %.2f R$ \n", valor);
        printf("Valor total do carrinho: %.2f R$ \n\n", somaCarinho);
      }
      else
      {
        printf("\n Quantidade invalida, recomecar operacao!");
      }
    }
    else
    {
      printf("\n Produto nao existe, escolha outro por favor \n");
    }
  } while (produto < 1 || produto > 10);
}

int realizarPagamento()
{
  float valorPago = 0;
  while (valorPago < valorFinal)
  {
    printf("\n Insira o valor a ser pago: ");
    scanf("%f", &valorPago);
    if (valorPago < valorFinal)
    {
      printf("\n Valor a ser pago nao pode ser menor que o valor final! \n");
    }
    else
    {
      float troco = valorPago - valorFinal;
      printf("\nPagamento de %.2f realizado com sucesso! \n", valorPago);
      printf("\nTroco: %.2f R$ \n", troco);
      printf("\nProdutos comprados:\n");
      for (int i = 0; i < 10; i++)
      {
        if (itensCarrinho[i] == 1)
        {
          printf("%d - %s - %.2f R$ \n", i + 1, itens[i], precos[i]);
        }
      }

      if (somaCarinho <= 100)
      {
        printf("\nObrigado, volte sempre! \n");
      }
      else if (100 < somaCarinho && somaCarinho < 300)
      {
        printf("\n Cliente do coracao! Volte sempre! \n");
      }
      else
      {
        printf("\n Voce e um cliente sensacional! Volte sempre! \n");
      }

      float new[10];
      somaCarinho = 0;
      tamanhoCarinho = 0;
      memset(itensCarrinho, 0, 10);
    }
  }
  return 0;
}