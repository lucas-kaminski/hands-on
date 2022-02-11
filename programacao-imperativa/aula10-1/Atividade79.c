#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int dia, mes, ano;
}DataNas;

typedef struct{
    DataNas dataNas;
    int codigo;
    int qtd;
    float preco;
    char nome[100];
}Produto;

int main() {
    Produto produto;

    printf("Digite se nome do produto: ");
    fgets(produto.nome, 100, stdin);
    printf("Digite o codigo do produto: ");
    scanf("%d", &produto.codigo);
    printf("Digite o quantidade de produtos: ");
    scanf("%d", &produto.qtd);
    printf("Digite o preco de produto: ");
    scanf("%f", &produto.preco);

    // leitura do novo campo data de nascimento
    printf("Digite data de vencimento do produto dd mm aaaa:");
    scanf("%d%d%d", &produto.dataNas.dia, &produto.dataNas.mes, &produto.dataNas.ano);

     printf("\nNome: %s\nCodigo %d\nQuantidade: %i\nPreco: %.2f\n", produto.nome, produto.codigo, produto.qtd, produto.preco);
    printf("Data de vencimento: %d/%d/%d\n", produto.dataNas.dia, produto.dataNas.mes, produto.dataNas.ano);

    return 0;
}
