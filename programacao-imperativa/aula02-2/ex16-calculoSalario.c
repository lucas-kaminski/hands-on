#include <stdio.h>
#include <string.h>

int main()
{
  float salario, novoSalario;

  printf("Digite o salario: ");
  scanf("%f", &salario);

  if (salario < 1000)
  {
    novoSalario = salario * (1 + 0.2);
  }
  else if (salario < 3000)
  {
    novoSalario = salario * (1 + 0.15);
  }
  else if (salario < 8000)
  {
    novoSalario = salario * (1 + 0.1);
  }
  else
  {
    novoSalario = salario * (1 + 0.05);
  }

  printf("O novo salario e: %.2f\n", novoSalario);
}