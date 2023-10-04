let d = new Date()

console.log(d);//completo

console.log(d.toDateString()); //dia, mes, diaInt, ano
console.log(d.toUTCString()); //converte a hora pro GMT

console.log(d.getFullYear()) //ano
console.log(d.getMonth()) //mês (lembrar que começa do 0)
console.log(d.getDay()) //dia da semana (0-6)(seg-sex)
console.log(d.getDate()) //dia do mês

console.log(d.getHours()) //horas
console.log(d.getMinutes()) //minutos
console.log(d.getSeconds()) //segundos
console.log(d.getMilliseconds()) //milisegundos

console.log(d.getTime()) //tempo desde 01/01/1970

//Manipulando datas
console.log(d.setFullYear('2022'))
console.log(d);

let dd = new Date()
dd.setDate( dd.getDate() + 7) //seta a data para a data atual mais 7 dias
console.log(dd);
dd.setFullYear(dd.getFullYear() + 1)
console.log(dd)