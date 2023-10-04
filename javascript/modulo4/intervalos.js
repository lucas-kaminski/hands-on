function showTime() {
    let d = new Date();
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let txt = h+":"+m+":"+s

    document.querySelector('.timer').innerHTML = txt
}

function comecar() {
    timer = setInterval(showTime, 100); //(função, milisegundos)
}

function parar() {
    clearInterval(timer) //para o intervalo, passando como parametro a função timer
}

function teste1() {
    console.log("oi");
}

aa = setTimeout(teste1, 1000) //seta uma função para após determinado de tempo, parar
//clearTimeout(aa)