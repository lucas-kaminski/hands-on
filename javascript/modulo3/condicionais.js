//switch (condicional igualdade de uma variável , tem que ter o break para cada caso, default = else)
var dia = 10;
var diaNome = '';

switch(dia) {
    case 1:
        diaNome = 'Segunda';
        break;
    case 2:
        diaNome = 'Terça';
        break;
    case 3:
        diaNome = 'Quarta';
        break;
    case 4:
        diaNome = 'Quinta';
        break;
    default:
        diaNome = "Dia da semana";
        break;
}
console.log(diaNome)
document.getElementById("dia").innerHTML = diaNome

//For - loop
let texto = ''
for(let i = 0; i<=10; i++) { //  cria variavel ; condição ; incremento
    texto = texto + i + '<br />'
};
document.querySelector("#demo").innerHTML = texto;

//for - loop com array
let flores = ['rosa','margarida', 'tulipa', 'girassol', 'hortência', 'copo de leite']
let html = '<ul>';
for (let i in flores) { //cria a variável e define o interável
    html += '<li>' + flores[i] + '</li>'
}
html += '</ul>'
document.querySelector("#demo2").innerHTML = html

//While - loop 
var c = 0
while (c <= 10) { //só define a condição
    html += 'Número: '+c+'<br />'
    c++
}
document.querySelector("#demo3").innerHTML = html