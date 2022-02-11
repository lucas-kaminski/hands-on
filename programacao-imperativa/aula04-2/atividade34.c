#include <stdio.h>
#include <stdlib.h>

int main(){
    int cont, n, soma = 0;
    float media;
    for(cont = 1; cont <= 10; ){
		printf("Digite o %i numero: > ", cont);
        scanf("%d", &n);
        if(n > 0){
            soma += n;
            cont++;
        }
    }
    media = soma / 10;
    printf("media = %f", media);
    return 0;
}