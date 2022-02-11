#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int idade;
    char sexo;
    char nome[100];
}Pessoa;

int main() {
    Pessoa pessoa;

    printf("Digite se nome: ");
    fgets(pessoa.nome, 100, stdin);
    printf("Digite sua idade: ");
    scanf("%d", &pessoa.idade);
    scanf("%c");
    printf("Digite f ou m para o sexo:");
    scanf("%c", &pessoa.sexo);

    printf("\nNome: %s\nIdade: %d\nSexo: %c\n", pessoa.nome, pessoa.idade, pessoa.sexo);

    return 0;
}
