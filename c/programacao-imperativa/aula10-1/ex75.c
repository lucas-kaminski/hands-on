#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct
{
    int cod;
    int qtd;
    float preco;
    char nome[100];
} Produto;

int main()
{
    Produto produto1;

    produto1.cod = 1;
    produto1.qtd = 2;
    produto1.preco = 3.50;
    strcpy(produto1.nome, "Beterraba");

    printf("Nome: %s\nCod: %d\nQuantidade: %i\nPreco: %.2f\nTotal: %.2f\n", produto1.nome, produto1.cod, produto1.qtd, produto1.preco, produto1.qtd * produto1.preco);

    return 0;
}
