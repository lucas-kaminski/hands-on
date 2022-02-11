#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>

int main(){

    int tabuada = 0;

    printf("Digite o numero para calcular a tabuada \n > ");
    scanf("%i", &tabuada);

    for (int x = 1; x<=10; ++x){
		printf("%i x %i = %i\n", x, tabuada, x * tabuada);
	}

	return;
}