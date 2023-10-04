#include <stdio.h>
#include <stdlib.h>

int main()
{
    float notas[4]= {5.5, 8.0, 3.5, 4.2};
    int i;

    printf("%.2f \n",notas[0]);

    for(i=0; i<4; i++)
    {
        printf("Nota %i = %.2f\n", i+1, notas[i]);

    }