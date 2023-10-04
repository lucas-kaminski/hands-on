let pi = Math.PI

Math.round(3.41) //arrendonda pro int
Math.round(3.59)

Math.floor(3.99) //arredonda para baixo
Math.ceil(2.20) //arredonda pra cima

Math.abs(-525) //absoluto

lista = [20,1,5,47,59,598,1000,-1,2]
console.log(Math.max(20,1,5,47,59,598,1000,-1,2))
console.log(Math.min(20,1,5,47,59,598,1000,-1,2))
//para max e min de listas
console.log(Math.max.apply(Math,lista))
console.log(Math.min.apply(Math,lista))

