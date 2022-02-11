#include <stdio.h>
#include <stdlib.h>

int main()
{
    int linhas, colunas, contador=0;

    printf("Serao digitados quantas linhas? ");
    scanf("%d", &linhas);

     printf("Serao digitados quantas colunas? ");
    scanf("%d", &colunas);

    float matriz[linhas][colunas];

    for(int linha=0; linha<linhas; linha++ )
    {
        for(int coluna=0; coluna<colunas; coluna++ )
        {
           printf("Digite o valor de [%d][%d] = ", linha+1, coluna+1);
           scanf("%f", &matriz[linha][coluna]);
           if( matriz[linha][coluna] > 7 )
               contador++;
        }
    }
    printf("\n\n notas maiores que 7 = %d \n\n", contador);
  return 0;
}
