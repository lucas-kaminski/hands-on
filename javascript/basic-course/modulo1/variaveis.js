var idade = 90;
var nome = "Helga";

idade = idade + idade + 2

if ( idade == 90 ){
    document.getElementById("titulo").innerHTML = idade;
} else if ( idade == 180 ) {
    console.log("triste");
} else {
    console.log("wow");
}

var hora = 3;
if (hora >= 12 && hora < 18) { //e
    console.log("Boa tarde");
} else if (hora < 5 || hora > 23) { //ou
    console.log("Boa madrugada");
}

var nome = "Kaminski"; //escopo global
console.log(window.nome);

let nome2 = "Kaminski"; //escopo local (undefined quando tenta global)
console.log(window.nome2);

const nome3 = "Kaminski"; //não pode alterar
