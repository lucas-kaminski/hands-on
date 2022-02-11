#include <stdio.h>
#include <stdlib.h>

typedef struct //interface...
{
  int dia, mes, ano;
} DataNas;

typedef struct
{
  DataNas dataNas;
  int idade;
  char sexo;      // como é uma letra, pode ser por scanf
  char nome[100]; //vetor de caracteres, necessita o fgets
} Pessoa;

void imprimirPessoa(Pessoa p)
{
  printf("\tNome: %s", p.nome);
  printf("\tIdade: %d\n", p.idade);
  printf("\tSexo: %c\n", p.sexo);
  printf("\tData de nas.: %d/%d/%d\n", p.dataNas.dia, p.dataNas.mes, p.dataNas.ano);
}

Pessoa lerPessoa()
{
  Pessoa p;

  printf("\n\tDigite o nome: ");
  fgets(p.nome, 100, stdin); //o stdin é o teclado

  printf("\tDigite a idade: ");
  scanf("%d", &p.idade);
  scanf("%c"); //trava para o enter

  printf("\tDigite o sexo: ");
  scanf("%c", &p.sexo);

  printf("\tDigite a data de nascimento: ");
  scanf("%d%d%d", &p.dataNas.dia, &p.dataNas.mes, &p.dataNas.ano);

  return p;
}
int main()
{
  Pessoa pessoa;
  pessoa = lerPessoa();
  imprimirPessoa(pessoa);
  return 0;
}