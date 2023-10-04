#include <stdio.h>
#include <locale.h>

int main()
{
  int i, count, count_50 = 0, count50_70 = 0, count70_ = 0;
  float peso, soma;
  printf('Insira quantas notas deseja inserir');
  scanf('%d', &count);

  for (i = 0; i < count; i++)
  {
    printf("Entre com o peso da %d pessoa: \n", i + 1);
    scanf("%f", &peso);

    if (peso < 50)
    {
      count_50++;
    }
    else if (peso >= 50 && peso <= 70)
    {
      count50_70++;
    }
    else
    {
      count70_++;
    }

    soma += peso;
  }
  printf("A media de peso das pessoas eh %.2f \n", soma / 10);
  printf("A quantidade de pessoas com peso menor que 50 eh: %d \n", count_50);
  printf("A quantidade de pessoas com peso entre 50 e 70 eh: %d \n", count50_70);
  printf("A quantidade de pessoas com peso maior que 70 eh: %d \n", count70_);
  return 0;
}