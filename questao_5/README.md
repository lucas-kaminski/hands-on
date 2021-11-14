## Descrição do problema:

Considere o seguinte problema

São fornecidas duas tabelas: Alunos e Notas.

Alunos contém três colunas: ID, Nome e Valor.

> Coluna | Tipo <br/>
> ID | Inteiro <br/>
> Nome | String <br/>
> Valor | Inteiro <br/>

Notas possui os seguintes dados:

> Nota | Valor_Min | Valor_Max <br/>
> 1 | 0 | 9 <br/>
> 2 | 10 | 19 <br/>
> 3 | 20 | 29 <br/>
> 4 | 30 | 39 <br/>
> 5 | 40 | 49 <br/>
> 6 | 50 | 59 <br/>
> 7 | 60 | 69 <br/>
> 8 | 70 | 79 <br/>
> 9 | 80 | 89 <br/>
> 10 | 90 | 100 <br/>

Joana dá a Eva a tarefa de gerar um relatório contendo três colunas: Nome, Nota e Valor. Joana não quer os Nomes dos alunos que receberam uma nota inferior a 8. O relatório deve estar em ordem decrescente por nota, ou seja, as notas mais altas são inseridas primeiro. Se houver mais de um aluno com a mesma nota (8-10) atribuído a eles, ordene esses alunos em particular por seus nomes em ordem alfabética. Por fim, se a nota for inferior a 8, use "NULL" como nome e liste-os por notas em ordem decrescente. Se houver mais de um aluno com a mesma nota (1-7) atribuído a eles, ordene esses alunos em particular por suas notas em ordem crescente.

Escreva uma consulta SQL para ajudar Eva.

Observação: Imprima "NULL" no nome se a nota for inferior a 8.

## Validação do problema:

Para o problema, desenvolvi um código que em toda compilação excluirá as tabelas (se existirem), as criará novamente, alimentará conforme o exemplo dado e fara a consulta.

Disponível no seguinte link:
[SQLite](https://sqliteonline.com/#share=520cee2428fda75cc50009d0a6c666b7cc8ca1a2dc46b29e1f1704df8e274c8d)

## Comentários pertinentes:

Optei por utilizar "CASE" para definição dos dados, devido a sua fácil aplicação. Como é aconselhável a definição de uma label, identifiquei as colunas com um "\_" no seu final

Para os dados não pertinentes a consulta, os identifiquei com o tipo NULL e fiz sua exclusão conforme necessário
