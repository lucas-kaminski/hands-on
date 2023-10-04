#include <stdio.h>
#include <locale.h>

int main(){

    int codigo, qtd;
    float pagar, troco, pagamento;
	setlocale(LC_ALL, "Portuguese");

    printf("Codigo do produto comprado: ");
    scanf("%i", &codigo);

    printf("Quantidade comprada: ");
    scanf("%i", &qtd);


    if (codigo == 1) {
        pagar = qtd * 5.00;
		printf("Quanto vai pagar1: ");
		scanf("%f", &pagamento);
		if(pagamento >= pagar){
			troco = pagamento - pagar;
			printf("Você receberá de troco R$ %.2f\n", troco);

		}else{
			troco =  pagamento - pagar;
			printf("Ficou faltando R$ %.2f para efetuar o pagamento\n", troco);
		}

    }
    else if (codigo == 2) {
        pagar = qtd * 25.00;
        printf("Quanto vai pagar1: ");
		scanf("%f", &pagamento);
		if(pagamento >= pagar){
			troco = pagamento - pagar;
			printf("Você receberá de troco R$ %.2f\n", troco);

		}else{
			troco =  pagamento - pagar;
			printf("Ficou faltando R$ %.2f para efetuar o pagamento\n", troco);
		}
    }
    else if (codigo == 3) {
        pagar = qtd * 50.00;
        printf("Quanto vai pagar1: ");
		scanf("%f", &pagamento);
		if(pagamento >= pagar){
			troco = pagamento - pagar;
			printf("Você receberá de troco R$ %.2f\n", troco);

		}else{
			troco =  pagamento - pagar;
			printf("Ficou faltando R$ %.2f para efetuar o pagamento\n", troco);
		}
    }

	printf("Valor a pagar: R$ %.2f\n", pagar);

	return 0;
}
