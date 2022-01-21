# express-rest-soap-server-example 
Um servidor simples desenvolvido como exemplo da utilização do pacote "express" junto ao pacote "soap".

# Introdução
Com o intuito de me integrar às ferramentas utilizadas durante o estágio, desenvolvi um servidor que tenha aporte tanto para comunicação em padrão REST quando padrão SOAP, escolhendo utilizar o pacote express devido a prévia experiência. Não sendo um especialista em nenhum dos assuntos abordados, espero fazer com que esse repositório seja uma ferramenta para aqueles que buscam entender melhor tais conceitos, principalmente no que tange ao padrão SOAP, devido a sua pouca quantidade de exemplos e estudos de caso. Pretendo atráves deste README.md explicar o que está presente dentro da estrutura do código, para aprofundamento técnico, recomendo a leitura dos comentários presente dentro do código.

# Descrição do estudo
Para entender o funcionamento geral de como deve ser escrito um servidor do tipo, desenvolvi um sistema possui duas rotas principais que explicitam qual o padrão de comunicação deve ser utilizado:
 - '/REST/**'
 - '/SOAP/**'
E ambas rotas possuem mais de um endpoint com o intuito de aprofundar melhor como deve ser disposto a arquitetura do projeto, fazendo com que utilize as mesmas funções lógicas independente do padrão da requisição. 

# Instalação, inicilização e testes
Dentro da pasta do projeto, em um terminal que tenha node, rode ```yarn install```, após instalado os pacotes, rode o script ```yarn start``` para inicializar o server.
Para teste de comunicação com o servidor, rode o script ```yarn test```, que simulará uma requisição vinda do client com a biblioteca 'soap', para simular as requisições REST, recomendo utilização de algum software, como Insomnia ou Postman.

# Explicações do projeto
## Arquitetura
O projeto está dentro da pasta 'src', dentro dela possui as pastas:
  - api: Arquivos de roteamento REST e arquivos WSDL, responsáveis para a descrição da comunicação no padrão SOAP.
  - services: Arquivos com as funções lógicas usadas em ambas rotas.
  - client: Arquivos que simulam requisisões para teste.

## server.js
Sendo o arquivo onde possui toda a definição estrutural do server, é responsável por:
  - Realizar a importação dos services e concatenar dentro de um objeto padronizado para leitura da biblioteca soap
  - Importação/leitura dos arquivos responsáveis pelo roteamento, tanto REST (identificados por .routes.js) quanto SOAP (.wsdl)
  - Log de requisições
Para a criação do objeto para a leitura no soap, deve ser seguido o padrão:
```javascript
{
  GetAddressByCEPService: { // Tem de ser o mesmo nome da service definido nas ultimas linhas do wsdl
    GetAddressByCEPServiceSoapPort: {  // Tem de ser o mesmo nome definido na portType 
      GetAddressByCEP // É a função importada, que será o mesmo nome do serviço chamado pelo client
    }
  }
}
``` 
Para aprofundamento do que é feito neste arquivo, como a utilização do "soap.listen(...)", recomendo a leitura da documentação do pacote soap, disponível [neste link](https://www.npmjs.com/package/soap).

## api
### **.routes.js
Para uma maior organização, defini as rotas REST em subarquivos, para isso utilizo o método .Router() do express e faço a definição das rotas, após isso exporto para o server.js e faço a definição do path, portanto, as rotas definidas somente com '/' no arquivo terão outro prefixo para chamada na requisição.

### **.wsdl
Sendo um dos grandes incentivadores da criação deste projeto, o arquivo wsdl é responsável pela descrição do serviço web. Sendo uma notação XML, indica ao cliente como compor a requisição e como será sua resposta. Para um maior aprofundamento, recomendo [este tutorial](https://www.tutorialspoint.com/wsdl/index.htm). Como o aprendizado é constante e algumas partes ainda não são tão claras o seu funcionamento, explicarei de forma sucinta as principais estruturas do arquivo. 

#### WSDL Definitions
Raiz de todo documento WSDL, possui declarações como o nome da webservice e os namespaces utilizados no arquivo. 
No caso, o namespace "tns" é utilizado uma url temporária que referência ao próprio webservice, isso é permitido graças ao targetNamespace definido na linha superior.

#### WSDL Types
Sendo uma definição tipada dos dados utilizados durante o input e output da webservice. 
Obrigatório estar no formato de XML Schema, pode ser declarado tanto no arquivo diretamente quanto importado de um schema presente em um arquivo .xsd. 
Para aprofundamento, recomendo a leitura do [tutorial da w3s](https://www.w3schools.com/xml/schema_intro.asp).

#### WSDL Message
Defini de forma abstrata, referenciando os types definidos anteriormente, como deve ser feito a comunicação entre o servidor e o cliente.
Deve ser feito uma message para cada momento de comunicação (uma para cada requisição e uma para cada resposta)

#### WSDL PortTypes
Explicita de forma abstrata uma entrada para ser roteada a comunicação e quais são suas operações, normalmente de que forma será o input e output.
Dentro de cada operação, será indicado de qual forma e quais dados os inputs e outputs terão atráves das messages anteriormente definidas.

#### WSDL Binding
Responsável pelo detalhamento de como uma PortType será trasmitida ao mundo exterior e de qual será o protocolo de comunicação (no caso http).
Neste caso, diferentemente das PortTypes, será explicito somente os componentes presentes para o input/output, erros e sincronicidade estarem de acordo com a comunicação.  

#### WSDL Service
Por fim, após explicitar os tipos possíveis de dados, as formas de comunicação que terão disponíveis e seus dados relacionados, atrelar a operações de comunicação atráves do portType e explicitar os seus componentes através do binding, o service é responsável por disponibilizar a comunicação com o client, definindo seu endereço.

