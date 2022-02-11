#include <stdio.h>
#include <stdlib.h>

int main(){

    int linhas, colunas, contador=0;

    printf("Serao digitados quantas linhas? ");
    scanf("%d", &linhas);

     printf("Serao digitados quantas colunas? ");
    scanf("%d", &colunas);


    int a[linhas][colunas], b[linhas][colunas], c[linhas][colunas];

    printf("Digite os valores do vetor A:\n");

    for(int linha=0; linha<linhas; linha++ )
    {
        for(int coluna=0; coluna<colunas; coluna++ )
        {
            printf("Digite o valor de [%d][%d] = ", linha+1, coluna+1);
			scanf("%d", &a[linha][coluna]);
		}
    }

    printf("Digite os valores do vetor B:\n");

    for(int linha=0; linha<linhas; linha++ )
    {
        for(int coluna=0; coluna<colunas; coluna++ )
        {
            printf("Digite o valor de [%d][%d] = ", linha+1, coluna+1);
			scanf("%d", &b[linha][coluna]);
		}
    }


    for(int linha=0; linha<linhas; linha++ )
    {
        for(int coluna=0; coluna<colunas; coluna++ )
        {
			c[linha][coluna] = a[linha][coluna] + b[linha][coluna];
		}
    }

    printf("VETOR RESULTANTE:\n");

    for(int linha=0; linha<linhas; linha++ )
    {
        for(int coluna=0; coluna<colunas; coluna++ )
        {
            printf("Soma Matriz [%d] [%d]: %d\n", linha+1, coluna+1, c[linha][coluna]);
        }
    }
    return 0;
}