#include <stdio.h>

int main()
{
  int n;
  int i;

  printf("Quantos alunos voce quer calcular a nota?: \n >");
  scanf("%d", &n);

  for (i = 0; i < n; i++)
  {
    float nota1, nota2, nota3, media;
    printf("Digite a nota 1: \n >");
    scanf("%f", &nota1);
    printf("Digite a nota 2: \n >");
    scanf("%f", &nota2);
    printf("Digite a nota 3: \n >");
    scanf("%f", &nota3);
    media = (nota1 + nota2 + nota3) / 3;
    printf("A media do aluno e: %.2f\n", media);
  }
  return 0;
}