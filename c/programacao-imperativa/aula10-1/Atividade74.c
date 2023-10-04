#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct{
    int idade;
    char sexo;
    char nome[100];
}Pessoa;

int main() {
    Pessoa pessoa1;

    pessoa1.idade = 35;
    pessoa1.sexo = 'f';
    strcpy(pessoa1.nome,"Joao Silva");

    printf("Nome: %s\nIdade: %d\nSexo: %c\n", pessoa1.nome, pessoa1.idade, pessoa1.sexo);

    return 0;
}
