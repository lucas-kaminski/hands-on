#include <stdio.h>

int main()
{
  int i;
  char str[3];

  for (i = 0; i < 100; i++)
  {
    sprintf(str, "%d", i);
    printf("%s\n", i % 3 == 0 ? (i % 5 == 0 ? "FooBaa" : "Foo") : (i % 5 == 0 ? "Baa" : str));
  }

  return 0;
}