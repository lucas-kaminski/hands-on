#include <stdio.h>
#include <stdlib.h>

int main()
{
  char palavra[255];

  printf("Digite uma palavra: \n >");

  setbuf(stdin, 0);           // Limpa o buffer do stdin
  fgets(palavra, 255, stdin); // Atribui a variavel com tal tamanho com o standard input

  // Limpa as casas não utilizadas
  palavra[strlen(palavra) - 1] = '\0';
  return 0;
}