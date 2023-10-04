// mostrar como ela funciona várias vezes
#include <stdio.h>
#include <stdlib.h>

// não retorna valores
void escrevaNome() { // Função definida
    printf("Bem vindo ao nosso sistema!\n");

    return 0;
}

//prototipo de função / anunciar que a função existe
void escrevaNome(); // declara função e verifica

int main()
{
    escrevaNome();

    return 0;
}