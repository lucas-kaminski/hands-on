#include <stdio.h>
#include <string.h>

int main() {
	
	char nome[50];
	int idade;
	float altura;
	
	strcpy(nome, "Fernando");
	idade = 25;
	altura = 1.78;
	
	printf("NOME = %s\n", nome);
	printf("IDADE = %d\n", idade);
	printf("ALTURA = %f\n", altura);
	
	return 0;
}