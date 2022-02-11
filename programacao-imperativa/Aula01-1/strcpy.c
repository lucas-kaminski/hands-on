/* strcpy example */
#include <stdio.h>
#include <string.h>

int main()
{
  char str1[] = "Sample string";
  char str2[50];
  char str3[40];
  strcpy(str2, str1); //str1 copies to str2
  strcpy(str3, "copy successful");
  printf("str1: %s\n str2: %s\n str3: %s\n ", str1, str2, str3);
  return 0;
}