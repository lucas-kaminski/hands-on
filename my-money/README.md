# my-money

Sistema de controle de finanças pessoais.

## Iniciando o projeto

Para iniciar o projeto, é necessário ter o [Python 3](https://www.python.org/downloads/) instalado.

Dentro da pasta do projeto, execute o comando:

| Sistema Operacional | Comando             |
| ------------------- | ------------------- |
| Windows/Linux       | python -m venv venv |

Para ativar o ambiente virtual, execute o comando:

| Sistema Operacional | Comando                  |
| ------------------- | ------------------------ |
| Windows             | . venv/Scripts/activate  |
| Linux:              | source venv/bin/activate |

Para instalar as dependências, execute o comando:
| Sistema Operacional | Comando |
| ------------------- | --------------------- |
| Windows/Linux | pip install pipenv && pipenv install |

Feito isso, o ambiente virtual estará pronto para ser utilizado.

Agora, é necessário criar um arquivo `.env` na raiz do projeto e alimenta-lo, baseando-se no arquivo `.env.example`.

## Configuração do banco de dados

Para configurar o banco de dados, é necessário ter, ou o [MySQL](https://www.mysql.com/downloads/) para rodar o banco de dados localmente, ou o [Docker](https://www.docker.com/products/docker-desktop) para rodar o banco de dados em um container.

```bash
docker-compose up -d
```

Após a instanciação do mysql e a criação da tabela especifíca, é necessário suas tabelas. Para isso, execute o comando:

```bash
pipenv run scripts
```

No CMD interativo, escolha os scripts relacionados.

## Executando o projeto

Para executar o projeto, execute o comando:

```bash
pipenv run dev
```
