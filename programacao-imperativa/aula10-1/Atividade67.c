#include <stdio.h>
#include <stdlib.h>

int main() {

    int tam = 10;
    int l, c, mat[tam][tam];

    srand(time(NULL));

    for(l = 0; l < tam; l++){
        for(c = 0;  c< tam; c++){
            mat[l][c] = rand() % 100;
        }
    }

    for(l = 0; l < tam; l++){
        for(c = 0;  c< tam; c++){
            printf("%2d ", mat[l][c]);
        }
        printf("\n");
    }

    printf("\n\nDiagonal principal: ");
    for(l = 0; l < tam; l++){
        printf("%d ", mat[l][l]);
    }

    printf("\n\nDiagonal secundaria: ");
    for(l = 0; l < tam; l++){
        printf("%d ", mat[l][tam - 1 - l]);
    }
    printf("\n\n");

    return 0;
}
