#include <stdio.h>

int main(){
    int idade, npessoas;
    float soma, media;

    printf("Digite as idades:\n");
    scanf("%i", &idade);

    if (idade < 0) {
        printf("IMPOSSIVEL CALCULAR\n");
    }
    else {
		soma = 0;
		npessoas = 0;
        while (idade >= 0) {
            soma = soma + idade;
            npessoas++;
            scanf("%i", &idade);
        }

        media = soma / npessoas;

		printf("MEDIA = %.2f\n", media);
    }

	return 0;
}