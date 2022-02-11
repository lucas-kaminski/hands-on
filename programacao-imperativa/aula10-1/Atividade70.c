#include <stdio.h>
#include <stdlib.h>

int tam = 5;
int mat[5][5];

void imprimir(){
    int i, j;
    for(i = 0; i < tam; i++){
        for(j = 0; j < tam; j++){
            printf("%2d ", mat[i][j]);
        }
        printf("\n");
    }
}

int somarLinha(int l){
    int c, soma = 0;

    for(c = 0; c < tam; c++)
        soma += mat[l][c];
    return soma;
}

int somarColuna(int c){
    int l, soma = 0;

    for(l = 0; l < tam; l++)
        soma += mat[l][c];
    return soma;
}

int main() {

    int i, j;

    srand(time(NULL));

    for(i = 0; i < tam; i++){
        for(j = 0; j < tam; j++){
            mat[i][j] = rand() % 10;
        }
    }

    imprimir();

    printf("\n");
    for(i = 0; i < tam; i++)
        printf("Soma da linha %d: %d\n",i, somarLinha(i));

    printf("\n");
    for(i = 0; i < tam; i++)
        printf("Soma da coluna %d: %d\n",i, somarColuna(i));

    return 0;
}
