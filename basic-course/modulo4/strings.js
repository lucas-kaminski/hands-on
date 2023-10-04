nome = "Lucas Kaminski Schimidt da Silveira"

console.log(nome.length) //Quantidade de caracteres

console.log(nome.indexOf('Kaminski')) //Posição que está o começo da string (int), se não tiver, retorna -1
console.log(nome.indexOf('Silva'))

console.log(nome.slice(0,10)) //corta baseado no intervalo
console.log(nome.slice(10))  //Com um parametro, começa do 0 a 15
console.log(nome.slice(0))  //pega tudo
console.log(nome.slice(-4)) // do final ao começo

console.log(nome.substring(0,10)) //funciona como o slice (não aceita negativo)

console.log(nome.substr(0,3)) //Coloca posição inicial e a quantidade de caracteres 

let resultado = nome.replace("Lucas","Silva")
console.log(resultado)

console.log(resultado.toUpperCase()) //Maiusculo
console.log(resultado.toLowerCase()) //Minusculo
console.log(resultado.concat(" concatenado", " concatenado")) //

console.log(resultado.trim()) //Tira todos os espaços não utilizados

console.log(resultado.charAt(0)) //Retorna o valor do index

console.log(resultado.split(' ')) //transforma em um array baseado no parametro de corte


//Template strings
var palavra1 = 'oi'
var palavra2 = 'tchau'
var frase = `Enquanto eu disse ${palavra1}, ela disse ${palavra2}` //usa o `` para funcionar o ${}
console.log(frase);