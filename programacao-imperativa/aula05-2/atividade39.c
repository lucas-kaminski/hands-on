#include <stdio.h>
#include <stdlib.h>

void calcular(float x, float y) {

    printf("Digite dois numeros: \n");
    scanf("%f %f", &x, &y);
    printf("\n\n");
    printf("%.2f + %.2f = %.2f\n", x, y, x + y);
    printf("%.2f - %.2f = %.2f\n", x, y, x - y);
    printf("%.2f * %.2f = %.2f\n", x, y, x * y);
    printf("%.2f / %.2f = %.2f\n", x, y, (x / y));
}

int main() {

    float x, y;
    calcular(x, y);
    return 0;
}