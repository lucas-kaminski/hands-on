#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i, qtdNotas;
    float soma = 0;

    printf("Digite quantas notas serao lancadas: \n > ");
    scanf("%i",&qtdNotas);

    float notas[qtdNotas];

    for(i=0; i<qtdNotas; i++)
    {
        printf("Digite a %i nota do aluno: \n > ", i+1);
        scanf("%f",&notas[i]);
        soma = notas[i] + soma;

    }

    float media = soma / qtdNotas;
    printf("A media do aluno eh: %.2f", media);

    return 0;
}