#include <stdio.h>
#include <string.h>

void limpar_entrada() {
    char c;
    while ((c = getchar()) != '\n' && c != EOF) {}
}

int main() {

    int idade;
	char nome[50];


	printf("Digite sua idade: ");
    scanf("%i", &idade);

	printf("Digite seu nome completo: ");
	limpar_entrada();
	fgets(nome, 50, stdin);

    printf("IDADE = %i\n", idade);
    printf("NOME = %s\n", nome);

	return 0;
}
