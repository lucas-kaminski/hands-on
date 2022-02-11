#include <stdio.h>
#include <stdlib.h>
int main()
{

    int peso,res1,res2,res3;

    peso = 0;
    res1 = 0;
    res2 = 0;
    res3 = 0;

    for (int i=1; i<=10; i++)
    {
    printf("Entre com o peso da %i pessoa: ",i);
    scanf("%i",&peso);

        if (peso < 50){
            res1++;
        } else if (peso >= 50 && peso <= 70) {
            res2++;
        } else if (peso > 70) {
            res3++;
        }

    }

    if (res1 == 1){
       printf("%i pessoa tem menos do que 50kg \n",res1);
    }else{
       printf("%i pessoas tem menos do que 50kg \n",res1);
    }

    if (res2 == 1){
       printf("%i pessoa tem entre 50kg a 70kg \n",res2);
    }else{
       printf("%i pessoas tem entre 50kg a 70kg \n",res2);
    }

    if (res3 == 1){
       printf("%i pessoa tem mais do que 71kg \n",res3);
    }else{
       printf("%i pessoas tem mais do que 71kg \n",res3);
    }

    return 0;
}
