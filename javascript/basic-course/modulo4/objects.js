let pessoa21 = {
    nomee:'Lucas Kaminski',
    sobrenomee:'Schimidt',
    idadee: 20,
    social: {
        facebook:'bqasq',
        instagram: 'kkka'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

//desconstruindo um object
let {nomee, sobrenomee, idadee} = pessoa21; //pegar os valores do object de forma concatenada com mesmos nome de variavel
console.log(nomee, sobrenomee, idadee)

let {nomee:pessoa21Nome1, sobrenomee:pessoa21Sobrenome1, idadee:pessoa21Idade1} = pessoa21; //definindo novos nomes para as variavels index:nova_variavel
console.log(pessoa21Nome1, pessoa21Sobrenome1, pessoa21Idade1);

let {nomee:pessoa21Nome = "Nome", sobrenomee:pessoa21Sobrenome = "Sobrenome", idadee:pessoa21Idade = 0} = pessoa21; //definindo valores padrões
console.log(pessoa21Nome, pessoa21Sobrenome, pessoa21Idade); 

let {facebook, instagram} = pessoa21.social //pegando dentro de objects
console.log(facebook, instagram)

let {nomee:n1, idadee:i1, social:{instagram:insta}} = pessoa21 //outra forma de acessar objects dentro de objects
console.log(n1, i1, insta)

function pegarNomeCompleto(obj) {
    return obj.nomee
}
console.log(pegarNomeCompleto(pessoa21))