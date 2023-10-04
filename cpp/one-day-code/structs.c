#include <stdlib.h>
#include <stdio.h>

struct bola
{
  char cor[255];
  float peso;
};

typedef struct Data
{
  int dia;
  int mes;
  int ano;
} Data;

typedef struct student
{
  char name[255];
  int age;
  Data nascimento;
} Student;

int main()
{
  struct bola bolaVariavel;

  printf("Digite a cor da bola: ");
  scanf("%s", bolaVariavel.cor);

  printf("Digite o peso da bola: ");
  scanf("%f", &bolaVariavel.peso);

  printf("Cor: %s\n", bolaVariavel.cor);
  printf("Peso: %f\n", bolaVariavel.peso);

  Student studentVariavel;

  printf("Digite o nome do aluno: ");
  scanf("%s", studentVariavel.name);

  printf("Digite a idade do aluno: ");
  scanf("%d", &studentVariavel.age);

  printf("Digite o dia de nascimento do aluno: ");
  scanf("%d", &studentVariavel.nascimento.dia);

  printf("Digite o mes de nascimento do aluno: ");
  scanf("%d", &studentVariavel.nascimento.mes);

  printf("Digite o ano de nascimento do aluno: ");
  scanf("%d", &studentVariavel.nascimento.ano);

  return 0;
}