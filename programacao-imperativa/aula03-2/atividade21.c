#include <stdio.h>
int main(){
    int senha;

    printf("Digite a senha: ");
    scanf("%d", &senha);

    while (senha != 123456) {
        printf("Senha Invalida! Tente novamente: ");
        scanf("%d", &senha);
    }

    printf("Acesso permitido!\n");

	return 0;
}