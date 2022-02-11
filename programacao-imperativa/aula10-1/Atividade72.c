#include <stdio.h>
#include <stdlib.h>

struct Pessoa{
    int idade;
    char sexo;
    char nome[100];
};

int main() {
    struct Pessoa pessoa;

    pessoa.idade = 35;
    pessoa.sexo = 'f';
    strcpy(pessoa.nome,"Joao Silva");

    printf("Nome: %s\nIdade: %d\nSexo: %c\n", pessoa.nome, pessoa.idade, pessoa.sexo);

    return 0;
}
