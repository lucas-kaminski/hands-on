#include <stdio.h>
#include <string.h>

// Menus
int main();
int menuCarrinho();
int menuFinanceiro();
int menuConfiguracoes();

// Itens
int listarProdutos();
int id[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
char itens[10][50] = {"Arroz", "Feijao", "Macarrao", "Bolo", "Leite", "Cafe", "Pao", "Queijo", "Detergente", "MP3 Player"};
int estoque[10] = {10, 8, 9, 10, 2, 12, 5, 10, 25, 1};
float precos[10] = {2.50, 3.50, 4.50, 5.50, 6.50, 7.50, 8.50, 9.50, 10.50, 11.50};

// Carrinho
void resetarCarrinho();
int adicionarProdutoAoCarrinho();
int listarProdutosSelecionados();
float pegarTotalCarrinho();
float pegarValorVenda(float valor);
int qtdCarrinho[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
float precosCarrinho[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

// Financeiro
float valorFinal = 0;
void pegarLucroVendedor();
void pegarItemComMaisLucro();
int realizarPagamento();

// Configuracoes
float margem = 0.2;

// Menus
int main()
{
  printf("\n Bem-vindo ao mercado verde! \n");
  int menu = 0;

  do
  {
    printf("\n Menu: \n 1 - Sistema de Listagem de Produtos \n 2 - Sistema de Compras \n 3 - Sistema de pagamentos \n 4 - Configuracoes \n 5 - Sair \n > ");
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
      menuFinanceiro();
      break;
    case 4:
      menuConfiguracoes();
      break;
    case 5:
      printf("\n Obrigado por usar o mercado verde! \n");
      break;
    }
  } while (menu != 4);
  return 0;
}

int menuCarrinho()
{
  int menu = 0;
  do
  {
    printf("\n Menu - Carrinho: \n 1 - Adicionar produto \n 2 - Listar produtor selecionados \n 3 - Listar produtos disponiveis \n 4 - Sair do carrinho \n > ");
    scanf("%d", &menu);

    switch (menu)
    {
    case 1:
      adicionarProdutoAoCarrinho();
      break;
    case 2:
      listarProdutosSelecionados();
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
  int qtdFinal = 0;
  for (int i = 0; i < 10; i++)
  {
    printf("%i %i \n", qtdCarrinho[i], qtdFinal);
    qtdFinal += qtdCarrinho[i];
  }
  valorFinal = pegarTotalCarrinho();
  if (qtdFinal >= 3)
  {
    printf("\n Devido a ter mais de tres itens no carrinho, voce ganhou 5 por cento de desconto!");
    valorFinal = pegarTotalCarrinho() * 0.95;
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

int menuConfiguracoes()
{
  int menu = 0;
  do
  {
    printf("\n Menu Financeiro: \n 1 - Mudar margem de lucro \n 2 - Voltar \n > ");
    scanf("%d", &menu);

    switch (menu)
    {
    case 1:
      printf("Margem atual $.2f", margem);
      printf("\n Digite a nova margem de lucro (0 a 1): \n");
      scanf("%f", &margem);
      break;
    case 2:
      printf("\n Volte sempre! \n");
      break;
    }
  } while (menu != 2);
  return 0;
}

// Itens
int listarProdutos()
{
  printf("** Produtos disponiveis ** \n");
  printf("%2s | %11s | %2s | R$ %2s | R$ %2s \n", "ID", "Produto", "Qtd", "Preco", "Preco Venda");
  for (int i = 0; i < 10; i++)
  {
    printf("%2i | %11s | %2i | R$ %2.2f | R$ %2.2f \n", id[i], itens[i], estoque[i], precos[i], pegarValorVenda(precos[i]));
  }
  return 0;
};

// Carrinho
void resetarCarrinho()
{
  for (int i = 0; i < 10; i++)
  {
    qtdCarrinho[i] = 0;
    precosCarrinho[i] = 0;
  }
  valorFinal = 0;
}

int adicionarProdutoAoCarrinho()
{
  int produto = 0;
  int quantidade = 0;
  float valorVendaFinal = 0;
  do
  {
    printf("\n Insira o codigo do produto: ");
    scanf("%d", &produto);
    int quantidadeAtual = qtdCarrinho[produto - 1];

    if (produto >= 1 && produto <= 10)
    {
      if (quantidadeAtual == 1)
      {
        printf("\n Aproveite a promocao e leve mais deste produto! \n");
      }
      else
      {
        qtdCarrinho[produto - 1] = 1;
      }

      printf("\n Insira a quantidade: ");
      scanf("%d", &quantidade);
      if (quantidade > 0)
      {
        if (quantidade <= estoque[produto - 1])
        {
          printf("%i", quantidadeAtual + quantidade);
          if (quantidadeAtual + quantidade == 2)
          {
            printf("Voce recebera um desconto de 5 por cento por estar levando dois ou mais deste produto!");
            valorVendaFinal = pegarValorVenda(precos[produto - 1]) * (quantidadeAtual + quantidade) * 0.95;
          }
          else if (quantidadeAtual + quantidade == 3 || quantidadeAtual + quantidade == 4)
          {
            printf("Voce recebera um desconto de 10 por cento por estar levando dois ou mais deste produto!");
            valorVendaFinal = pegarValorVenda(precos[produto - 1]) * (quantidadeAtual + quantidade) * 0.90;
          }
          else if (quantidadeAtual + quantidade >= 5)
          {
            printf("Voce recebera um desconto de 15 por cento por estar levando dois ou mais deste produto!");
            valorVendaFinal = pegarValorVenda(precos[produto - 1]) * (quantidadeAtual + quantidade) * 0.85;
          }
          else
          {
            valorVendaFinal = pegarValorVenda(precos[produto - 1]) * (quantidade);
          }

          precosCarrinho[produto - 1] = valorVendaFinal;
          qtdCarrinho[produto - 1] = quantidadeAtual + quantidade;
          estoque[produto - 1] = estoque[produto - 1] - quantidade;

          printf("\n\nProduto escolhido: %s \n", itens[produto - 1]);
          printf("Valor a ser pago no(s) produto(s): %.2f R$ \n", valorVendaFinal);
          printf("Valor total do carrinho: %.2f R$ \n\n", pegarTotalCarrinho());
        }
        else
        {
          printf("\n Estoque insuficiente! \n");
        }
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

int listarProdutosSelecionados()
{
  int counter = 0;
  for (int i = 0; i < 10; i++)
  {
    if (qtdCarrinho[i] >= 1)
    {
      printf("\n %2i | %11s | %2i | R$ %.2f", id[i], itens[i], qtdCarrinho[i], precosCarrinho[i]);
      counter++;
    }
  }
  if (counter == 0)
  {
    printf("\n Nenhum produto foi adicionado ao carrinho! \n");
  }
  printf("\n");
  return 0;
}

float pegarTotalCarrinho()
{
  float total = 0;
  for (int i = 0; i < 10; i++)
  {
    total += precosCarrinho[i];
  }
  return total;
};

float pegarValorVenda(float valor)
{
  float valorVenda = valor * (1 + margem);
  return valorVenda;
}

// Financeiro
void pegarLucroVendedor()
{
  float lucro = 0;
  for (int i = 0; i < 10; i++)
  {
    if (qtdCarrinho[i] > 0)
    {
      lucro += precosCarrinho[i] - precos[i];
    }
  }
  printf("\n");
  printf("\n Lucro do vendedor na compra: %.2f R$\n", lucro);
}

void pegarItemComMaisLucro()
{
  float maiorLucro = 0;
  float lucro = 0;
  int index = 0;
  for (int i = 0; i < 10; i++)
  {
    if (qtdCarrinho[i] > 0)
    {
      lucro = precosCarrinho[i] - precos[i];
      if (lucro > maiorLucro)
      {
        maiorLucro = lucro;
        index = i;
      }
    }
  }
  printf("\n O item com maior lucro foi o %s com o total de R$ %.2f \n", itens[index], maiorLucro);
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
      listarProdutosSelecionados();
      pegarLucroVendedor();
      pegarItemComMaisLucro();

      float somaCarrinho = pegarTotalCarrinho();

      if (somaCarrinho <= 20)
      {
        printf("\n Obrigado \n");
      }
      else if (20 < somaCarrinho <= 50)
      {
        printf("\n Obrigado, volte sempre \n");
      }
      else if (50 < somaCarrinho && somaCarrinho <= 100)
      {
        printf("\n Cliente do coracao, volte sempre! \n");
      }
      else if (somaCarrinho > 100 && somaCarrinho <= 200)
      {
        printf("\n Cliente do bom e assim mesmo, volte sempre! \n");
      }
      else
      {
        printf("\n Voce e um cliente sensacional! Volte sempre! \n");
      }

      void resetarCarrinho();
    }
  }
  return 0;
}