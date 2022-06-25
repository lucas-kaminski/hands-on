#include <stdlib.h>
#include <stdio.h>
#include <string>
#include <iostream>

using namespace std;

int main()
{
  // As variáveis estão em um endereço de memória armazenandoo valor
  // Os ponteiros armazenam o valor de um endereço de memória

  int a = 20;      // O valor da variável é vinte
  scanf("%d", &a); // O & faz a busca do endereço de memória

  int *p; // Declaração de ponteiro (Ele tem a sua própria posição de memória e seu valor vai ser outro endereço de memória)
  int b = 20;

  p = &b; // O ponteiro recebe o endereço de memória da variável b

  printf("b: %d\n", b);

  *p = a; // O * para acessar o valor do endereço apontado

  printf("new b:%d\n", b);
}