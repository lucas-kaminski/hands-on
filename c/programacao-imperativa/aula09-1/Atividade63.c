#include <stdio.h>
#include <stdlib.h>

int main() {

    int valor1, valor2;

    printf("Quantos valores no primeiro vetor? \n > ");
    scanf("%i", &valor1);

    printf("Quantos valores no segundo vetor? \n > ");
    scanf("%i", &valor2);

    int vet1[valor1], vet2[valor2];

    for(int i = 0; i < valor1; i++){
        vet1[i] = rand() % 100;
    }

    for(int i = 0; i < valor2; i++){
        vet2[i] = rand() % 100;
    }

    // imprime o vetor 1
    printf("\nVetor 1: ");
    for(int i = 0; i < valor1; i++){
        printf("%3d ", vet1[i]);
    }

    // imprime o vetor 2
    printf("\nVetor 2: ");
    for(int i = 0; i < valor2; i++){
        printf("%3d ", vet2[i]);
    }

    return 0;
}
