#include <stdio.h>
#include <stdlib.h>
#include <time.h>

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

void imprimirProduto(Produto p){
    printf("\tNome: %s", p.nome);
    printf("\tCodigo: %d\n", p.codigo);
    printf("\tQuantidade: %d\n", p.qtd);
    printf("\tPreco: %.2f\n", p.preco);
    printf("\tData de Vencimento.: %d/%d/%d\n", p.dataNas.dia, p.dataNas.mes, p.dataNas.ano);
}

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

    printf("Digite data de vencimento do produto dd mm aaaa:");
    scanf("%d%d%d", &produto.dataNas.dia, &produto.dataNas.mes, &produto.dataNas.ano);

    imprimirProduto(produto);

    return 0;
}
