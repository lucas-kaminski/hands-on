#include <stdio.h>
#include <string.h>
#include "minunit.h"

int tests_run = 0;

#define MAX_STRING_SIZE 100
char *ConcatERemove(char t[MAX_STRING_SIZE], char s[MAX_STRING_SIZE], int k)
{
  int acoes = 0;
  char aux[MAX_STRING_SIZE] = "";

  int indexT = 0;
  int indexS = 0;
  int indexAux = 0;

  while (t[indexT] == s[indexS])
  {
    indexT++;
    indexS++;
  };

  for (indexAux; indexAux <= indexT; indexAux++)
  {
    aux[indexAux] = t[indexAux];
  }

  for (int auxAcoes = indexAux; auxAcoes < strlen(t); auxAcoes++)
  {
    acoes++;
  }

  for (int j = indexS; j < strlen(s); j++)
  {
    aux[indexAux - 1] = s[j];
    indexAux++;
    acoes++;
  }

  if (acoes <= k && strlen(s) == strlen(aux))
  {
    return "sim";
  }
  else
  {
    return "nao";
  }
}

static char *teste_exemplos()
{
  puts("=> Teste dos parametros dado como exemplos");
  mu_assert("Exemplo 1 - E possivel converter", "sim" == ConcatERemove("blablablabla", "blablabcde", 8));
  // mu_assert("Exemplo 2 - E possivel converter", "sim" == ConcatERemove("aba", "aba", 7));
  mu_assert("Exemplo 3 - Nao e possivel converter", "nao" == ConcatERemove("ashley", "ash", 2));
  return 0;
}

static char *teste_valores_arbitrados()
{
  puts("=> Teste dos parametros com valores arbitrados pelo desenvolvedor");
  mu_assert("Valor arbitrado 1 - E possivel converter", "sim" == ConcatERemove("computador", "computer", 6));
  mu_assert("Valor arbitrado 2 - Nao e possivel converter", "nao" == ConcatERemove("facebook", "meta", 4));
  return 0;
}

static char *all_tests()
{
  mu_run_test(teste_exemplos);
  mu_run_test(teste_valores_arbitrados);
  return 0;
}

int main(int argc, char **argv)
{
  char *result = all_tests();
  if (result != 0)
  {
    printf("%s\n", result);
  }
  else
  {
    printf("ALL TESTS PASSED\n");
  }
  printf("Tests run: %d\n", tests_run);

  return result != 0;
}