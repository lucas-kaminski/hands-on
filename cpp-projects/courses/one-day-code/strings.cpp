#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <iostream>

using namespace std;

int main()
{
  string palavra;
  printf("Digite uma palavra: \n >");

  cin >> palavra;

  cout << "A palavra digitada foi: " << palavra << std::endl;

  return 0;
}