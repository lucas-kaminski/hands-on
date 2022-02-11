#include <stdio.h>
#include <stdlib.h>

void escrevaValor() {

    int numero = 0;
    printf("Digite um valor: \n > ", numero);
    scanf ("%i", &numero);

    int dobro = numero * 2;
    printf("O dobro do valor eh: %i\n", dobro);

    return 0;
}

void escrevaValor();

int main()
{
    escrevaValor();

    return 0;
}