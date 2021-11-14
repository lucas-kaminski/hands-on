## Descrição do problema:

Considere uma string contendo caracteres minúsculos do alfabeto português. Você pode executar dois tipos de operações nesta string:

- Concatenar um caractere minúsculo do alfabeto português ao final da string.
- Remover o último caractere da string. Se a string estiver vazia, ela permanecerá vazia.

Dado um número inteiro k e duas strings s e t, determine se você consegue converter s em t através de exatamente k operações descritas acima sobre s.
Se possível, o programa imprime 'sim', do contrário imprime 'não'.

Desenvolva um programa em linguagem C/C++ ou Java que implementa e utiliza a função ConcatERemove(s,t,k).
Ela deve retornar os resultados 'sim' ou 'não'.
A função tem os seguintes parâmetros:
s: string inicial
t: string desejada
k: um número inteiro que representa o número de operações

Formato de entrada:

A primeira linha contêm a string s, a string inicial.
A segunda linha contém a string t, a string desejada.
A terceira linha contém um inteiro k, o número de operações.

Limitações:

- 1 <= |s| <= 100
- 1 <= |t| <= 100
- 1 <= k <= 100
- s e t consiste de letras minúsculas do alfabeto português (ascii[a-z])

Formato de saída:

Imprima 'sim' se você puder obter a string t executando exatamente k operações sobre a string s, e imprime 'não' no caso contrário.

## Validação do problema:

Ao rodar o código, será pedido uma sequência de inputs, sendo eles, a string inicial, a string desejada e o número de operações, respectivamente.

Disponível no seguinte link:
[Online GDB](https://onlinegdb.com/GvSBsbeC5)

### Exemplos de interação:

> Input: <br/>
> blablablabla <br/>
> blablabcde <br/>
> 8 <br/> > <br/>
> Output: <br/>
> sim

## Comentários pertinentes:

Dada a especificação de se inputar somente strings com a formatação ascii[a-z], foi utilizado o scanf, onde será pego a string de até no máximo caracteres definido e caso tenha algum caracter como espaço, será definido o final da string.

Em busca de um design fluído, foi realizado uma declaração simples das funções no mesmo arquivo, além de realizar um gerenciamento dos dados em cada operação (este demonstrado essencial após os testes da questao_4)

Optei por definir uma função que verifica o valor de cada string inserida para validar se todos os caracteres correspodem ao requisitado, e caso não, aponta o erro e para a aplicação

Para a função ConcatERemove, foi realizado a abordagem pensada lógica que busca uma maior clareza das ações, onde:

- Primeiramente, é analisado a similaridade entre a string t e a string s, identificando até qual index possuem caracteres iguais.

Ex.: "blablablabla" e "blablabcde" são similares até o 7º caractere, portanto, este 7 é o index referência

- Definido o ponto de parada atráves do index, é construído uma string auxiliar, a partir de t, do seu começo até o caracter corresponde ao index definido

Ex.: A string auxiliar construída será "blablab"

- Para definir a quantidade de ações de exclusão, é contado do index definido até a ultima posição da string t (sendo estes, todos os caracteres removidos)

Ex.: O tamanho de "blablablabla" é 12, enquanto o de "blablab" é de 7, como a diferença é de 5, foi realizado 5 ações de exclusões

- Para finalizar as operações, é feito a concatenação na variavel auxiliar a partir da string s, onde cada caracter concatenado será a partir do ponto de parada de semelhança até o ultimo caracter da string s

- A cada concatenação, é aumentado em um a quantidade de ações realizadas

Ex.: Para "blablab" ficar igual a "blablabcde", é necessário concatenar os caracteres "c", "d" e "e", gerando assim, o total de três ações

- Por fim, é realizado tanto a validação da quantidade de ações realizadas em relação ao limite imposto quanto a equivalencia entre a string desejada e a string auxiliar gerada.

Ex.: Como foi feito somente 7 ações e o limite era de 8, é possível realizar a operação
