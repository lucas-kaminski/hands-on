#include <stdio.h>
#include <locale.h>

int main(){
	
    int codigo, qtd;
    float pagar;
	setlocale(LC_ALL, "Portuguese");

    printf("Codigo do produto comprado: ");
    scanf("%i", &codigo);

    printf("Quantidade comprada: ");
    scanf("%i", &qtd);

    if (codigo == 1) {
        pagar = qtd * 5.00;
    }
    else if (codigo == 2) {
        pagar = qtd * 3.50;
    }
    else if (codigo == 3) {
        pagar = qtd * 4.80;
    }
    else if (codigo == 4) {
        pagar = qtd * 8.90;
    }
    else if (codigo == 5) {
        pagar = qtd * 7.32;
    }

	printf("Valor a pagar: R$ %.2f\n", pagar);

	return 0;
}