#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#define NUM_LINHA 3
#define NUM_COLUNA 3
int main()
{
    int linha, coluna;

    float notas[NUM_LINHA][NUM_COLUNA] = {{5.5, 7.4, 9.8},
                                          {6.7, 8.1, 5.4},
                                          {3.2, 9.2, 8.7}};

    printf("Conteudo da Matriz: \n\n");

    for (linha = 0; linha < NUM_LINHA; linha++)
    {
        for (coluna = 0; coluna < NUM_COLUNA; coluna++)
        {
            printf("%.2f, ", notas[linha][coluna]);
        }
        printf("\n");
    }

    printf("\n\n Elemento 2 linha, 3 coluna: %.2f\n", notas[1][2]);

    return 0;
}
