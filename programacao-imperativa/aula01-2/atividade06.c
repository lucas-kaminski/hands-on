#include <stdio.h>

int main(){
    int distancia;
    float gasto, consumoMedio;

    printf("Distancia percorrida em KM: ");
    scanf("%i", &distancia);

    printf("Combustivel gasto: ");
    scanf("%f", &gasto);

    consumoMedio = distancia/gasto;

	printf("Consumo medio = %.2f\n", consumoMedio);

	return 0;
}
