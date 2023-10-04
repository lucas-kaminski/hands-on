#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

int main()
{
    int cont, QtdNotas;
    char codigo = '0';
    char aprov[10];
    float nota, media, total = 0;

    while (codigo != 'F'){

        printf("Quantas notas quer digitar? \n > ", cont);
        scanf ("%i", &QtdNotas);

        for (cont=1; cont<=QtdNotas; cont++){
            printf("digite a %i nota do aluno: \n > ", cont);
            scanf ("%f", &nota);
            total = total + nota;
        }
        media = total /QtdNotas;
        if(media >= 7.0){
            strcpy(aprov, "Aprovado");
        }else{
            strcpy(aprov, "Reprovado");
        }
        printf("\n\n");
        printf("A Media do aluno eh: %.2f\n", media);
        printf("Ele foi: %s\n", aprov);
        printf("\n\n");
        total = 0;
        nota = 0;
        printf("Deseja realizar outro calculo pressione qualquer tecla ou Digite 'F' para finalizar");
        codigo = getche();
        system("cls"); // limpar a tela
    }
    return 0;
}