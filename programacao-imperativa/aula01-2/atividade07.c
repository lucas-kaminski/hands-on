#include <stdio.h>

int main(){
    float preco, dinheiro, troco;
    int qtd;

    printf("Preco unitario do produto: ");
    scanf("%f", &preco);

    printf("Quantidade comprada: ");
    scanf("%d", &qtd);

    printf("Dinheiro recebido: ");
    scanf("%f", &dinheiro);

    troco = dinheiro - (preco * qtd);

    printf("TROCO = %.2f\n", troco);

	return 0;
}
