#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    srand(time(NULL));
    int tam = 5;
    int l, c, mat[tam][tam];

    for (l = 0; l < tam; l++)
    {
        for (c = 0; c < tam; c++)
        {
            mat[l][c] = rand() % 100;
            printf("%d ", mat[l][c]);
        }
        printf("\n");
    }

    printf("\n\n");
    for (l = 0; l < tam; l++)
    {
        printf("%d ", mat[l][l]);
    }

    return 0;
}