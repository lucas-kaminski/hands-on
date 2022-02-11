#include <stdio.h>
#include <string.h>

int main()
{
  int inputSegundos, minutos, segundos, horas;

  printf("Entre com o numero de segundos: ");
  scanf("%d", &inputSegundos);

  horas = inputSegundos / 3600;
  minutos = (inputSegundos % 3600) / 60;
  segundos = inputSegundos % 60;

  printf("%dh:%dmin:%ds", horas, minutos, segundos);
}