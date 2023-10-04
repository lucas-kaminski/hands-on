#include <stdio.h>
#include <string.h>

int main() {

	char nome[50];
	char sobrenome[50];
	int idade;
	float altura;
	long long int cpf;
	char cep[50];
	char endereco[50];
	char estado[50];

	strcpy(nome, "Fernando");
	strcpy(sobrenome, "Souza");
	idade = 20;
	altura = 1.72;
	cpf = 12312312312;
	strcpy(cep, "12345-123");
	strcpy(endereco, "Rua das Palmeiras, 125");
	strcpy(estado, "PR");

	printf("NOME = %s\n", nome);
	printf("SOBRENOME = %s\n", sobrenome);
	printf("IDADE = %i\n", idade);
	printf("ALTURA = %.2lf\n", altura);
	printf("CPF = %lld\n", cpf);
	printf("CEP = %s\n", cep);
	printf("Endereco = %s\n", endereco);
	printf("Estado = %s\n", estado);

	return 0;
}
