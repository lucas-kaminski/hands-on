#include <stdio.h>

int main(){
    float a, b, c, quadrado, triangulo, trapezio;

    printf("Digite a medida A: ");
    scanf("%f", &a);

	printf("Digite a medida B: ");
    scanf("%f", &b);

	printf("Digite a medida C: ");
    scanf("%f", &c);


    quadrado = a * a;
    printf("AREA DO QUADRADO = %.2f\n", quadrado);

    triangulo = (a * b) / 2;
	printf("AREA DO TRIANGULO = %.2f\n", triangulo);

    trapezio = ((a + b) * c) / 2;
	printf("AREA DO TRAPEZIO = %.2f\n", trapezio);

	return 0;
}