//dimensões de dentro do objeto
var altura_total = document.querySelector("html").offsetHeight
var largura_total = document.querySelector("html").offsetWidth
console.log(altura_total, largura_total)

//dimensões de dentro do objeto sem a barra de rolagem
var altura_total = document.querySelector("html").clientHeight
var largura_total = document.querySelector("html").clientWidth
console.log(altura_total, largura_total)

//tamanho real de tudo
var altura_total = document.querySelector("html").scrollHeight
var largura_total = document.querySelector("html").scrollWidth
console.log(altura_total, largura_total)

//posicionamento do scroll da page
//se for saber do html, pega via window
    //window.scrollY
    //window.scrollX
var scroll_vertical = document.querySelector("html").scrollTop
var scroll_horizontal = document.querySelector("html").scrollLeft
console.log(scroll_vertical, scroll_horizontal)

//movimentar o scroll
//document.querySelector(".texto").scrollTo(0,0) //x,y

function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

//Exercicio botton show baseadono scroll
function decidirBotaoScroll() {
    if (window.scrollY === 0){
        document.querySelector("#ontop").classList.add('none');
    } else {
        document.querySelector("#ontop").classList.remove('none');
    }
}

//Executa a função em determinado de tempo (devasado)
//setInterval(decidirBotaoScroll, 1000)

//Evento que rastrei algo, sempre que mudar algo efetua a função
window.addEventListener('scroll',decidirBotaoScroll)