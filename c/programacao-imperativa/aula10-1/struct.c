#include <stdio.h>
#include <stdlib.h>

struct Pessoa
{
  int idade;
  char sexo; // F M
  char nome[100];
};
int main()
{
  struct Pessoa dados_pessoa;
  dados_pessoa.idade = 35;
  dados_pessoa.sexo = 'F';
  strcpy(dados_pessoa.nome, "Joao Silva");
  printf("Nome: %s \n Idade: %i \n Sexo: %c \n", dados_pessoa.nome, dados_pessoa.idade, dados_pessoa.sexo);
  return 0;
}