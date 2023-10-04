#include <stdio.h>
#include <stdlib.h>
int main(){
    int n;
    double valor1, valor2, valor3, media;

    printf("Quantos casos voce vai digitar? \n > ");
    scanf("%d", &n);

    for (int i=0; i<n; i++) {
        printf("Digite tres numeros:\n");
        scanf("%lf %lf %lf", &valor1, &valor2, &valor3);

        media = (valor1 + valor2 + valor3) / 3;

        printf("MEDIA = %.1lf\n", media);
    }

	return 0;
}
