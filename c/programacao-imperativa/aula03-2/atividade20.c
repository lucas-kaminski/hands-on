#include <stdio.h>
#include <locale.h>

int main(){
	
    int dinheiro, codigo, troco;
    float pagar;
	setlocale(LC_ALL, "Portuguese");


    printf("Quanto você vai pagar? ");
    scanf("%i", &dinheiro);


    if (dinheiro >= 50.00) {
		
		printf("Você pode comprar estes produtos:\n");
		printf("Produto 1: 5.00\n");
		printf("Produto 2: 25.00\n");
		printf("Produto 3: 50.00\n");
		scanf("%i", &codigo);
		
		if (codigo == 1) {
			troco = dinheiro - 5.00;
		}else if (codigo == 2 ){
			troco = dinheiro - 25.00;
		}else if (codigo == 3){
			troco = dinheiro - 50.00;
		}
		
		printf("Você receberá de troco R$ %.2f\n", troco);
	
	}else if (dinheiro >= 25.00) {
		
		printf("Você pode comprar estes produtos:\n");
		printf("Produto 1: 5.00\n");
		printf("Produto 2: 25.00\n");
		scanf("%i", &codigo);
		
		if (codigo == 1) {
			troco = dinheiro - 5.00;
		}else if (codigo == 2 ){
			troco = dinheiro - 25.00;
		}
		
		printf("Você receberá de troco R$ %.2f\n", troco);
	}else if (dinheiro >= 5.00) {
		
		printf("Você pode comprar estes produtos:\n");
		printf("Produto 1: 5.00\n");
		scanf("%i", &codigo);
		
		if (codigo == 1) {
			troco = dinheiro - 5.00;
		}
		
		printf("Você receberá de troco R$ %.2f\n", troco);
	}

	return 0;
}