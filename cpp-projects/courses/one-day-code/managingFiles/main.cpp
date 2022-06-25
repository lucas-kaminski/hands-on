#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <fstream>

using namespace std;

int main()
{
  ofstream arquivoDeSaida;
  arquivoDeSaida.open("texto.txt", std::ios_base::app);

  arquivoDeSaida << "Ola mundo!" << endl;

  arquivoDeSaida.close();
}