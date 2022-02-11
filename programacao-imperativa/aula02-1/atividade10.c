#include <stdio.h>

int main()
{
	int num1, num2, soma, subtracao, multiplicacao, divisao;
	
	printf("Programa de Calculadora\n");
	printf("Entre os 2 números a serem processados: ");
	scanf ("%i%i", &num1, &num1);
	
	soma = 				num1 + num2;
	subtracao = 		num1 - num2;
	multiplicacao = 	num1 * num2;
	divisao = 			num1 / num2;
	
	printf( "A soma e: %i\n", soma);
	printf( "A subtracao e: %i\n", subtracao);
	printf( "A multiplicacao e: %i\n", multiplicacao);
	printf( "A divisao e: %i\n", divisao);
	
	return 0;
	
}




