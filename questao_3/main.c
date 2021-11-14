// Considere uma string contendo caracteres minúsculos do alfabeto português. Você pode executar dois tipos de operações nesta string:
//   1. Concatenar um caractere minúsculo do alfabeto português ao final da string.
//   2. Remover o último caractere da string. Se a string estiver vazia, ela permanecerá vazia.
// Dado um número inteiro k e duas strings s e t, determine se você consegue converter s em t através de exatamente k operações descritas acima sobre s.
//   Se possível, o programa imprime 'sim', do contrário imprime 'não'.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#define MAX_STRING_SIZE 100

char *ConcatERemove(char t[MAX_STRING_SIZE], char s[MAX_STRING_SIZE], int k)
{
  int acoes = 0;
  char aux[MAX_STRING_SIZE] = "";

  int iT = 0;
  int iS = 0;
  int auxIndex = 0;

  while (t[iT] == s[iS])
  {
    iT++;
    iS++;
  };

  for (auxIndex; auxIndex <= iT; auxIndex++)
  {
    aux[auxIndex] = t[auxIndex];
  }

  acoes = strlen(t) - strlen(aux);

  for (int j = iS; j < strlen(s); j++)
  {
    aux[auxIndex - 1] = s[j];
    auxIndex++;
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

int validateString(char *string)
{
  int i;
  for (i = 0; i < strlen(string); i++)
  {
    if ((string[i] >= 'A' && string[i] <= 'Z') || isdigit(string[i]))
    {
      return 1;
    }
  }
  return 0;
}

int main()
{
  char t[MAX_STRING_SIZE];
  char s[MAX_STRING_SIZE];
  int k;

  scanf("%s", t);
  scanf("%s", s);
  scanf("%d", &k);

  if (validateString(t) == 1 || validateString(s) == 1)
  {
    printf("\nPalavras invalidas\n");
    return 1;
  }

  printf("%s", ConcatERemove(t, s, k));

  return 0;
}