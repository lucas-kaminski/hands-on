#include <stdio.h>
#include <locale.h>
int main(){
    char escala;
    float celsius, fahrenheit;
	setlocale(LC_ALL, "Portuguese");

    printf("Voce vai digitar a temperatura em qual escala (C/F)? ");
    scanf("%c", &escala);

    if (escala == 'F') {
        printf("Digite a temperatura em Fahrenheit: ");
		scanf("%f", &fahrenheit);

        celsius = 5.0 / 9.0 * (fahrenheit - 32.0);
        printf("Temperatura equivalente em Celsius: %.2f\n", celsius);
    }
    else {
        printf("Digite a temperatura em Celsius: ");
		scanf("%f", &celsius);

        fahrenheit = celsius * 9.0 / 5.0 + 32.0;
        printf("Temperatura equivalente em Fahrenheit: %.2f\n", fahrenheit);
    }

	return 0;
}
