#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <iostream>
#include <new>

using namespace std;

int main()
{
  int matriz[2][2];

  for (int i = 0; i < 2; i++)
  {
    for (int j = 0; j < 2; j++)
    {
      cout << "Digite um valor para a posicao [" << i << "][" << j << "]: ";
      cin >> matriz[i][j];
    }
  }

  for (int i = 0; i < 2; i++)
  {
    for (int j = 0; j < 2; j++)
    {
      cout << matriz[i][j] << " ";
    }
    cout << endl;
  }

  int **matrizNew;

  matrizNew = new int *[2];

  for (int i = 0; i < 2; i++)
  {
    matrizNew[i] = new int[2];
  }

  return 0;
}