#include <stdio.h>
#include <stdlib.h>

typedef struct
{
    int cod;
    int qtd;
    float preco;
    char nome[100];
} Produto;

int main()
{
    Produto produto;

    printf("Digite o codigo do produto: ");
    scanf("%d", &produto.cod);
    printf("Digite o nome do produto: ");
    fgets(produto.nome, 100, stdin);
    printf("Digite o quantidade de produtos: ");
    scanf("%d", &produto.qtd);
    printf("Digite o preco de produto %s ", produto.nome);
    scanf("%f", &produto.preco);

    printf("\nNome: %s\nCodigo %d\nQuantidade: %i\nPreco: %.2f\n", produto.nome, produto.cod, produto.qtd, produto.preco);

    return 0;
}
