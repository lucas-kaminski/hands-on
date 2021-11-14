## Descrição do problema:

Informações sobre animais de estimação são mantidos em duas tabelas separadas:

> TABLE dogs <br/>
> id INTEGER NOT NULL PRIMARY KEY, <br/>
> name VARCHAR(50) NOT NULL <br/>

> TABLE cats <br/>
> id INTEGER NOT NULL PRIMARY KEY, <br/>
> name VARCHAR(50) NOT NULL <br/>

Escreva uma consulta SQL que selecione o nome de todos os animais de estimação de maneira distinta.

## Validação do problema:

Para o problema, optei pela mesma abordagem da questao cinco, onde, em cada execução, será excluído se existir, criado e alimentado para realizar a consulta.

Neste caso, como não houve dados de exemplo, arbitrei alguns a fim de uma melhor exemplificação do caso.

Disponível no seguinte link:
[SQLite](https://sqliteonline.com/#share=ee95a6c30eda380f4cbbeaf506f8d97fa38906cb9308f8f3d0e35a6bec6b3b84)

## Comentários pertinentes:

Na minha interpretação, entendi que é requisitado uma consulta que liste todos os nomes existentes no banco, tanto para cachorro quanto para gato, e que não seja repetido os valores repetidos, caso existam. Portanto, analisando o código e os valores alimentados, mesmo que existam três linhas que o nome seja igual a 'FAROFA', somente é impresso uma ocorrência.
