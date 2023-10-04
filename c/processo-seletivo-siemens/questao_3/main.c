#include <stdio.h>
#include <string.h>
#include <ctype.h>
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

int validacaoDaString(char *string)
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

  if (validacaoDaString(t) == 1 || validacaoDaString(s) == 1)
  {
    printf("\nPalavras invalidas\n");
    return 1;
  }

  printf("%s", ConcatERemove(t, s, k));

  return 0;
}