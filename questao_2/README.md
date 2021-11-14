## Descrição do problema:

Escreva um programa em linguagem C/C++ ou Java que:
Imprime cada número de 1 até 100 em uma nova linha.

- Para cada múltiplo de 3, imprima "Foo", ao invés do número.
- Para cada múltiplo de 5, imprima "Baa", ao invés do número.
- Para números múltiplos simultaneamente de 3 e 5, imprima "FooBaa", ao invés do número.

A sua solução deverá ser utilizando o menor número de linhas de código possível porém deve produzir um código eficiente.

## Validação do problema:

Para o problema, pelo fato de não ter nenhum input de dados, é possível validar somente rodando o código.

Disponível no seguinte link:
[Online GDB](https://onlinegdb.com/pPc6wMTJ3)

## Comentários pertinentes:

Devido a instrução de se utilizar a menor quantidade de linhas, optei por utilizar uma variável auxiliar para apontar a string formada atráves da função _sprintf_ (neste caso somente o valor de i), para que assim, consiga em somente uma linha, realizar o print da informação conforme as regras impostas sem conflito de tipo de dado.
