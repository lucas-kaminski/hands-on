//pega a lista de classes e add
function verde() {
    document.querySelector("#exemplo").classList.remove('vermelho');
    document.querySelector("#exemplo").classList.remove('azul');
    document.querySelector("#exemplo").classList.add('verde'); //seleciona o objeto, pega sua lista, add o verde
    document.querySelector("#exemplo");
}

function vermelho() {
    document.querySelector("#exemplo").classList.remove('verde');
    document.querySelector("#exemplo").classList.remove('azul');
    document.querySelector("#exemplo").classList.add('vermelho');
}

function azul() {
    document.querySelector("#exemplo").classList.remove('vermelho');
    document.querySelector("#exemplo").classList.remove('verde');
    document.querySelector("#exemplo").classList.add('azul');
}

function trocar() { 
    if (document.querySelector("#mudar").classList.contains('preto')) { //retorna um true 
        document.querySelector("#mudar").classList.remove('preto')
        document.querySelector("#mudar").classList.add('verde')
    } else {
        document.querySelector("#mudar").classList.remove('verde')
        document.querySelector("#mudar").classList.add('preto')
    }

}

//altera o atributo especifico
function trocarImagem(filename, animalname) {                  //atributo, novo valor
    document.querySelector('.imagem').setAttribute('src','images/'+filename)
    document.querySelector('.imagem').setAttribute('data-animal',animalname)
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
    return console.log(animal)
}