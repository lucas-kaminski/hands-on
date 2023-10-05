//       parametros    abre chaves e faz a função
let somar = (x,y) => {
    return (x + y);
}
somar(1,1)

//       parametros return (sem conchetes)
let somar2 = (x,y) => x+y;
somar2(1,2)

//       com um parametro pode ser assim
let letrasNome = nome => nome.length
letrasNome("Lucas")

/*----------------------*/
//Spread (coloca ... para concatenar)
let arraNum = [1,2,3,4,5]
let arraNum2 = [6,7,8]

let arraFinal = [...arraNum, ...arraNum2, 9, 10]
console.log(arraFinal)

let info = {
    cidade: 'Curitiba',
    estado: 'Paraná'
}

let maisInfo = {
    ...info,
    pais: 'Brasil'
}
console.log(maisInfo)

/*----------------------*/
//Rest (serve para receber diversos parametros numa função) transforma em array 
maisNumero = [11,12,13]
function adicionar(numeros1,...numeros) {
    novosNumeros = [
        ...numeros, //rest
        ...numeros1 //spread
    ]
    console.log(novosNumeros)
    }
adicionar(maisNumero,1,2,3,4,5,6,7,8,9,10)


/*----------------------*/
//Include retorna boolean para item dentro de um array ou string
listaIncludes = ['ovo','cafe']
console.log(listaIncludes.includes('ovo'))
console.log(listaIncludes.includes('banana'))

//repeat
stringss = "Lucas"
console.log(stringss.repeat(2))

/*----------------------*/
//key, values e entries
let listaKeysValuesEntries = ['ovo','cafe']
console.log(Object.keys(listaKeysValuesEntries)) //identifica todos os indexes do objeto
console.log(Object.values(listaKeysValuesEntries)) //identifica todos os indexes do objeto
console.log(Object.entries(listaKeysValuesEntries)) //identifica o index, o seu valor e cria array com arrays indicando eles

/*----------------------*/
//padStart, padEnd
let telefone = '5'
console.log(telefone.padEnd(9,'*')) //(qual o tamanho deve ser, o que deve ser preenchido) no FINAL da string
console.log(telefone.padStart(9, '-')) //no COMEÇO da string

//exemplo mascarar cartão
let cartao = "1234 1234 1234 1234"
let lastDigits = cartao.slice(-4)
console.log(lastDigits.padStart(16,'*'));