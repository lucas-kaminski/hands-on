#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int tam = 3;
    int l, c, A[tam][tam], B[tam][tam], C[tam][tam];

    srand(time(NULL));

    for(l = 0; l < tam; l++){
        for(c = 0; c < tam; c++){
            A[l][c] = rand() % 100;
            B[l][c] = rand() % 100;
        }
    }

    printf("\nMatriz A\n");
    for(l = 0; l < tam; l++){
        for(c = 0; c < tam; c++)
            printf("%3d ", A[l][c]);
        printf("\n");
    }

    printf("\nMatriz B\n");
    for(l = 0; l < tam; l++){
        for(c = 0; c < tam; c++)
            printf("%3d ", B[l][c]);
        printf("\n");
    }

    return 0;
}
