//Requisições
//JSON (JavaScrip Object Notation)
//Usa objetos para receber e enviar requisições
//Cria a variável e coloca um objeto

let pessoaJSON = {
    nome:'Lucas',
    sobrenome:'Kaminski',
    caracteristicas: ['Programador','Fã'],
    estetica: {
        altura: 180,
        peso: 10
    }
}

//Quando faz a request, recebe um json em string, 
//{'nome':'Lucas', 'sobrenome':'Kaminski'} (As variáveis tem '' tbm)

//transforma a string de json em json real
let pessoaJSONpase = JSON.parse({'nome':'Lucas', 'sobrenome':'Kaminski'})

//transforma o JSON em string (as variaveis vão em formato object)
JSON.stringify({nome:'Lucas', sobrenome:'Kaminski'})
