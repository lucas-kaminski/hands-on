#include <stdio.h>
#include <string.h>

int main()
{
  int distancia;
  float consumo;

  printf("Insira a distancia percorrida (km): ");
  scanf("%i", &distancia);

  printf("Insira o consumo de gasolina (l): ");
  scanf("%f", &consumo);

  printf("O consumo medio e de: %f\n", distancia / consumo);
}