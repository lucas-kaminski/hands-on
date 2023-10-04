//Reação a algum acontecimento
//onclick pode colocar o comando js direto
//this faz referência ao proprio elemento
function clicou() {
    document.querySelector(".evento").innerHTML = "Novo botão"
}

//onkeyup é quando finaliza a digitação
function digitou(e) {
//    console.log("digitou")
    if(e.key == "Enter") {
        let texto = document.getElementById("campo").value;
        console.log(texto)
    }
}

// Minha resolução
// function menu() {
//     console.log(document.querySelector("#menu-area").clientWidth)
//     console.log(document.querySelector("#menu-area").offsetWidth)

//     if (document.querySelector("#menu-area").offsetWidth === 200) {
//         document.querySelector("#menu-area").setAttribute('style','width:0px');
//     } else if (document.querySelector("#menu-area").offsetWidth === 0) {
//         document.querySelector("#menu-area").setAttribute('style','width:200px');
//     } else {
//         console.log("bugou")
//     }
// }

// Resolução do curso
function menu() {

    let menuArea = document.getElementById("menu-area")
    if(menuArea.style.width == '0px') {
        menuArea.style.width = '200px'
    } else {
        menuArea.style.width = '0px'
    }
}