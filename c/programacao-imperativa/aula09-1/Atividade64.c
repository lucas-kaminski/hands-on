#include <stdio.h>
#include <stdlib.h>

int main() {
    int i, maisVedido = 0, quant[10];
    float valorTotal = 0, valorParcial, valor[10];

    for(i = 0; i < 10; i++){
        printf("Digite valor unitario e quantidade vendida: ");
        scanf("%f%d", &valor[i], &quant[i]);
    }

    // letra a
    for(i = 0; i < 10; i++){
        valorParcial = quant[i] * valor[i];
        printf("Vendido: %d\tValor unitario R$%.2f\tValor total R$%.2f\n", quant[i], valor[i], valorParcial);
        valorTotal += valorParcial;
    }
    printf("Valor Total das vendas R$%.2f\n", valorTotal);
    printf("Comissao paga ao vendedor R$%.2f\n", valorTotal * 0.05);

    // letra b
    for(i = 0; i < 10; i++){
        if(quant[i] > maisVedido)
            maisVedido = quant[i];
    }

    for(i = 0; i < 10; i++){
        if(quant[i] == maisVedido){
            printf("Posicao: %d\tValor R$%.2f\n", i, valor[i]);
        }
    }

    return 0;
}