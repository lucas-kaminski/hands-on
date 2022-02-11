#include <stdio.h>

int main(){
    int num;

    printf("Digite 1 ou 2: \n > ");
	scanf("%i", &num);

	switch(num){
	case 0:
		printf("zero");
		break;
	case 1:
		printf("um");
		break;

	default:
		printf("nenhuma escolha foi realizada antes");
	}
	return 0;
}