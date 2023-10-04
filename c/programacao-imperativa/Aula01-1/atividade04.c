#include <stdio.h>
#include <string.h>


void limpar_entrada() {
    char c;
    while ((c = getchar()) != '\n' && c != EOF) {}
}

int main() {

	char nome[50];
	int idade;
	float altura;
	long long int cpf;
	char cep[50];
	char endereco[50];
	char estado[50];


	printf("Digite seu nome completo: ");
	fgets(nome, 50, stdin);

	printf("Digite sua idade: ");
    scanf("%i", &idade);

	printf("Digite sua altura: ");
    scanf("%f", &altura);

	printf("Digite sua CPF: ");
    scanf("%lli", &cpf);

	printf("Digite seu CEP: ");
	limpar_entrada();
	fgets(cep, 50, stdin);

	printf("Digite seu Endereco: ");
	fgets(endereco, 50, stdin);

    printf("Digite seu Estado: ");
	fgets(estado, 50, stdin);


	printf("NOME = %s", nome);
	printf("IDADE = %i\n", idade);
	printf("ALTURA = %.2lf\n", altura);
	printf("CPF = %lli\n", cpf);
	printf("CEP = %s", cep);
	printf("Endereco = %s", endereco);
	printf("Estado = %s\n", estado);

	return 0;
}
