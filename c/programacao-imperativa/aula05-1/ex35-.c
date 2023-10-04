#include <stdio.h>
#include <conio.h>
#include <string.h>
#include <ctype.h>

int main()
{
  char situacao[10], status;
  int i, count;
  float media, mediaFinal, nota, soma;

  printf("Insira a media base:  >");
  scanf("%f", &media);

  while (status != 'F')
  {
    mediaFinal = 0;
    nota = 0;
    soma = 0;

    printf("Quantas notas gostaria de digitar?  >");
    scanf("%d", &count);

    for (i = 0; i < count; i++)
    {
      printf("Digite a nota %d:  >", i + 1);
      scanf("%f", &nota);
      soma += nota;
    }

    mediaFinal = soma / count;

    if (mediaFinal >= media)
    {
      strcpy(situacao, "Aprovado");
    }
    else
    {
      strcpy(situacao, "Reprovado");
    }

    printf("A media da disciplina e: %.2f ", media);
    printf("A media das notas e: %.2f ", soma / count);
    printf("A situacao do aluno e: %s ", situacao);

    printf("Digite F para sair ou qualquer outra tecla para continuar: ");
    status = toupper(getche());
    system("cls");
  }

  return 0;
}