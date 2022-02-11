#include <stdio.h>

int main()
{
  float dardo1, dardo2, dardo3;

  printf("Insira a distancia primeiro dardo: ");
  scanf("%f", &dardo1);

  printf("Insira a distancia segundo dardo: ");
  scanf("%f", &dardo2);

  printf("Insira a distancia terceiro dardo: ");
  scanf("%f", &dardo3);

  if (dardo1 > dardo2 && dardo1 > dardo3)
  {
    printf("O primeiro dardo teve a maior distancia: %.2f\n", dardo1);
  }
  else if (dardo2 > dardo1 && dardo2 > dardo3)
  {
    printf("O segundo dardo teve a maior distancia: %.2f\n", dardo2);
  }
  else if (dardo3 > dardo1 && dardo3 > dardo2)
  {
    printf("O terceiro dardo teve a maior distancia: %.2f\n", dardo3);
  }
  else
  {
    printf("Dois ou mais dardos tiveram a mesma distancia", dardo1);
  }
}