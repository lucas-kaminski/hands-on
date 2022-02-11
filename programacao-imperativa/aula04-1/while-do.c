#include <stdio.h>
#include <locale.h>
#include <conio.h>
#include <stdlib.h>

int main()
{
  setlocale(LC_ALL, "Portuguese");

  float num1, num2, resultado;
  char operacao = '0';

  do
  {
    num1, num2, resultado = 0;
    printf("(1) - Somar:\n");
    printf("(2) - Subtrair:\n");
    printf("(3) - Multiplicar:\n");
    printf("(4) - Dividir:\n");
    printf("(0) - Sair:\n\n");

    printf("Informe a operacao: \n >");
    operacao = getche(); //Digita e ja continua
    printf("\n");

    if (operacao != '0')
    {
      if (operacao >= '5' || operacao <= '0')
      {
        printf("Operacao invalida! \n >");
      }
      else
      {
        printf("Informe o primeiro numero: \n >");
        scanf("%f", &num1);

        printf("Informe o segundo numero: \n >");
        scanf("%f", &num2);

        if (operacao == '1')
        {
          resultado = num1 + num2;
        }
        else if (operacao == '2')
        {
          resultado = num1 - num2;
        }
        else if (operacao == '3')
        {
          resultado = num1 * num2;
        }
        else if (operacao == '4')
        {
          resultado = num1 / num2;
        }
      }
      printf("Resultado: %f \n", resultado);
      printf("Clique em qualquer tecla para continuar \n >");
      getch(); //Espera o clique de uma tecla qualquer
      system("cls");
    }
  } while (operacao != '0');
}