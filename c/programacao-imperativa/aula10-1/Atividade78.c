#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int dia, mes, ano;
}DataNas;

typedef struct{
    DataNas dataNas; // struct
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

    printf("Digite sua data de nascimento no formato dd mm aaaa:");
    scanf("%d%d%d", &pessoa.dataNas.dia, &pessoa.dataNas.mes, &pessoa.dataNas.ano);

    printf("\nNome: %s\nIdade: %d\nSexo: %c\n", pessoa.nome, pessoa.idade, pessoa.sexo);
    printf("Data de nas.: %d/%d/%d\n", pessoa.dataNas.dia, pessoa.dataNas.mes, pessoa.dataNas.ano);

    return 0;
}
