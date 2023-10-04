#include <stdio.h>
#include <ctype.h>
#include <locale.h>

int main()
{
  float temperatura;
  char escala;

  setlocale(LC_ALL, "Portuguese");

  printf("Escolha a ééééééscala \n");
  printf("(C - Celsius, F - Fahrenheit): \n");
  scanf("%c", &escala);

  printf("Digite a temperatura: ");
  scanf("%f", &temperatura);

  if (toupper(escala) == 'C')
  {
    float tempCelsius = (temperatura - 32) * 5 / 9;
    printf("A temperatura %.2f F equivale %.2f C ", temperatura, tempCelsius);
  }
  else if (toupper(escala) == 'F')
  {
    float tempFahrenheit = (temperatura * 9 / 5) + 32;
    printf("A temperatura %.2f C equivale %.2f F ", temperatura, tempFahrenheit);
  }
  else
  {
    printf("Escala inválida!");
  }
}