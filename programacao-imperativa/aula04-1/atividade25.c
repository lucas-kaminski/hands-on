#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

int main(){
	
    float num1, num2, resultado;
    char operacao = '0';
	
	do
	//while ( operacao != '0' );
	{
		num1, num2, resultado = 0; // reseta as variaveis
		
		// imprimindo as opcoeses da calculadora
		printf (" \n (1) somar\n");
		printf (" (2) subtrair\n");
		printf (" (3) multiplicar\n");
		printf (" (4) dividir\n");
		printf (" (0) sair do programa\n");
		
		
		printf(" Informe e operacao: \n > ");
		
		operacao = getche(); // digitou, já continua
		
		printf("\n\n");
		
		if (operacao != '0'){
			printf (" Digite o primeiro numero: \n > ");
			scanf("%f", &num1);
			
			printf (" Digite o segundo numero: \n > ");
			scanf("%f", &num2);
			
			if (operacao == '1'){
				resultado = num1 + num2;
			}else if (operacao == '2'){
				resultado = num1 - num2;
			}else if (operacao == '3'){
				resultado = num1 * num2;
			}else if (operacao == '4'){
				resultado = num1 / num2;
			}			
			printf("\n O resultado e: \n> %.2f\n", resultado);
			printf("\nPressione uma tecla para realizar um novo calculo");
			getch(); // parar programa
			system("cls"); // limpar a tela
		}	
	}
	while ( operacao != '0' );
	
	return 0;
}
