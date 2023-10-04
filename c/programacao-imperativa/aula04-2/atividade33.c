#include <stdio.h>
#include <stdlib.h>

int main(){
    int n, i;
	
	printf("Digite um numero: \n > ");
    scanf("%d", &n);
    for(i = 1; i <= n; i = i + 2){
        printf("%d ", i);
    }
    return 0;
}