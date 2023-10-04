#include <stdlib.h>
#include <stdio.h>
#include <string>
#include <iostream>
#include <new>

using namespace std;

struct fruta
{
  string nome;
  int peso;
};

int main()
{
  fruta *primeiraFruta = new fruta;
  primeiraFruta->nome = "Banana";

  cin >> primeiraFruta->peso;

  cout << primeiraFruta->nome << " " << primeiraFruta->peso << endl;

  fruta *variasFrutas = new fruta[3];

  for (int i = 0; i < 3; i++)
  {
    cin >> variasFrutas[i].nome;
    cin >> variasFrutas[i].peso;
  }

  for (int i = 0; i < 3; i++)
  {
    cout << variasFrutas[i].nome << " " << variasFrutas[i].peso << endl;
  }
}