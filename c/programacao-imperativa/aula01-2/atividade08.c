#include <stdio.h>

int main()
{
    int duracao, horas, minutos, segundos, resto;

    printf("Digite a duracao em segundos: ");
    scanf("%i", &duracao);

    horas = duracao / 3600;
    resto = duracao % 3600;

    minutos = resto / 60;
    segundos = resto % 60;

    printf("%i:%i:%i", horas, minutos, segundos);

    return 0;
}