#include <stdio.h>
#include <stdlib.h>

int main() {

    int vet1[25], vet2[25];

    for(int i = 0; i < 25; i++){
        vet1[i] = rand() % 100;
        vet2[i] = rand() % 100;
    }

    // imprime o vetor 1
    printf("\nVetor 1: ");
    for(int i = 0; i < 25; i++){
        printf("%3d ", vet1[i]);
    }

    // imprime o vetor 2
    printf("\nVetor 2: ");
    for(int i = 0; i < 25; i++){
        printf("%3d ", vet2[i]);
    }

    return 0;
}
