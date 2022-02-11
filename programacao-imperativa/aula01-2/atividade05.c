#include <stdio.h>

int main(){
    int num1, num2, num3;

    printf("Digite o valor de X: ");
    scanf("%i", &num1);

    printf("Digite o valor de Y: ");
    scanf("%i", &num2);

    printf("Digite o valor de Z: ");
    scanf("%i", &num3);

    int soma = num1 + num2 + num3;

    printf("SOMA = %i\n", soma);

	return 0;
}