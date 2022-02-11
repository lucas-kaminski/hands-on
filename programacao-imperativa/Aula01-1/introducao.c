#include <stdio.h>
#include <string.h>

void limpar_entrada()
{
  char c;
  while ((c = getchar()) != '\n' && c != EOF)
  {
  }
}

int main()
{
  printf("Hello, World!\n");

  char nome[50];
  char sobrenome[50];
  int idade;
  float altura;
  long long cpf;
  char cep[50];
  char endereco[50];
  char estado[50];

  int input;
  char input2[50];

  strcpy(nome, "Fernando");
  strcpy(sobrenome, "Silva");
  idade = 25;
  altura = 1.78;
  cpf = 12312312312;
  strcpy(cep, "12345-123");
  strcpy(endereco, "Rua das Palmeiras, 25");
  strcpy(estado, "PR");

  printf("Insira seu dado:");
  scanf("%i", &input);
  limpar_entrada();
  printf("Insira seu dado 2:");
  fgets(input2, 50, stdin);

  printf("Nome = %s \n", nome); //s = string
  printf("Sobrenome = %s \n", sobrenome);
  printf("Idade = %i \n", idade);     //i = int
  printf("altura = %.2f \n", altura); //f = float
  printf("CPF = %lli \n", cpf);
  printf("CEP = %s \n", cep);
  printf("Endereco = %s \n", endereco);
  printf("Estado = %s \n", estado);
  printf("Input = %i \n", input);
  printf("Input2 = %s \n", input2);

  return 0;
}