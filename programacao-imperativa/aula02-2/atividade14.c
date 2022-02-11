#include <stdio.h>

int main(){
    float distancia1, distancia2, distancia3, maior;

    printf("Digite as tres distancias:\n");
    scanf("%f %f %f", &distancia1, &distancia2, &distancia3);

    if (distancia1 > distancia2 && distancia1 > distancia3) {
        maior = distancia1;
    }
    else if (distancia2 > distancia1 && distancia2 > distancia3) {
        maior = distancia2;
    }
    else {
        maior = distancia3;
    }

	printf("MAIOR DISTANCIA = %.2f\n", maior);

	return 0;
}
