#include <stdio.h>
#include <string.h>

int main()
{
  int num;
  printf("Digite: \n");
  scanf("%d", &num);

  switch (num)
  {
  case 1:
    printf("Numero 1 = %i \n", num);
    break;
  case 2:
    printf("Numero 2 = %i \n", num);
    break;
  case 3:
    printf("Numero 3 = %i \n", num);
    break;
  case 4:
    printf("Numero 4 = %i \n", num);
    break;
  case 5:
    printf("Numero 5 = %i \n", num);
    break;
  case 6:
    printf("Numero 6 = %i \n", num);
    break;
  case 7:
    printf("Numero 7 = %i \n", num);
    break;
  case 8:
    printf("Numero 8 = %i \n", num);
    break;
  case 9:
    printf("Numero 9 = %i \n", num);
    break;
  case 10:
    printf("Numero 10 = %i \n", num);
    break;
  default:
    printf("Numero 10 < %i \n", num);
  }
}