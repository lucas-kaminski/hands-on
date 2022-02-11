let lista = ['ovo','chocolate','farinha','farofa']

console.log(lista.toString(''));  //transforma em string tudo junto com ,
console.log(lista.join(';')) //transforma em string baseado no parametro

console.log(lista.indexOf('farofa')) //retorna o index do parametro
console.log(lista.indexOf('kk')); //retorna -1

console.log(lista.pop() +" " + lista) //retira o ultimo item da lista e retorna ele
console.log(lista.shift() + " " + lista); //retira o primeiro

console.log(lista.push('novoItem') + " " + lista) //adiciona no array e retorna o seu index
lista[0] = "ItemExistenteNovo" // altera o valor caso index já exista
console.log(lista);
lista[5] = 'ItemNovoIndexNãoExistente' //adiciona caso não exista o index
console.log(lista)


delete lista[0] //deleta mas deixa o valor como null
console.log(lista);
lista.splice(1,2) //remove a partir do index 1 dois valor
console.log(lista)
lista.splice(0) //a partir do index 0 remove tudo
console.log(lista)
delete lista //não deleta pq foi declarado var/let

let lista1 = ['ovo','chocolate','farinha','farofa']
let lista2 = ['cacau','forno']
console.log(lista1.concat(lista2)) // juntar dois arrays

console.log(lista1.sort()); //ordena em ordem alfabética
console.log(lista1.sort().reverse()) //o inverso

//funções em array
//function(item, index, array)
let lista4 = [0,1,2,3,4,5,6,7,8,9,10]
console.log(lista4.map(function(item) { //map aplica metodos index por index
    return item * 2 //gera um novo array com o return
}));

console.log(lista4.filter(function(item) { //faz um filtro baseado em uma função
    if(item < 5) {
        return true //vai ser os valores aceitos e postos no novo array
    } else {
        return false 
    }
}))

console.log(lista4.every(function(item) { //retorna só um boolean baseado na função
    if(item < 20) {
        return true
    } else {
        return false
    }
}))

console.log(lista4.some(function(item) { //retorna um boolean baseado na condição SE UM item for verdadeira/falso
    if(item<3) {
        return true 
    } else {
        return false
    }
}));

console.log(lista4.some(function(item){
    return (item>3)? true : false //outra forma de fazer return (condição)? true : false
}))

console.log(lista4.find(function(item){ //se existir o item, retorna ele, se não, undefined
    return (item == 20)? true:false
}))

console.log(lista4.findIndex(function(item){ //se existir, retorna o index, se não, -1
    return (item == 20)? true:false
}))

//Descontruindo arrays
arra1 = ["Lucas","Kaminski","KKKKK"]
let [nomecompleto, nomezinho, sobrenomezinho] = arra1
console.log(nomecompleto, nomezinho, sobrenomezinho)
let [a] = arra1
console.log(a)
let [,,kkk] = arra1
console.log(kkk);

let [issoai, issosim, issomesmo] = ['issoai','issosim', 'issomesmo']
console.log(issoai, issosim, issomesmo)

function criar() {
    let nume = [1,2,3]
    return nume
}

let [nume1, nume2, nume3] = criar()
console.log(nume1, nume2, nume3)