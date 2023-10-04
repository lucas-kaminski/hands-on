//Sincrono -> Linha após linha
//Assíncrono -> Realiza algumas requisições antes

//Callback -> Função que é realizada em outra execução (tipo timer)

//Promises -> Promessa de resposta

function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log('Pegando temperatura');
        setTimeout(function(){
                resolve('40 na sombra')
                reject('Deu erro')
            },2000);
    });
}

//status -> pendente, finalizado e rejeitado
//Faz a requisiçõa e deixa ela em pending
let tempo = pegarTemperatura()

//O retorno finalizado certo da requisição (CALLBACK)
tempo.then(function(resultado) {
    console.log('Temperatura: '+resultado)
});

//O retorno com erro da função (CALLBACK)
tempo.catch(function(error){
    console.log('Eita, deu errado')
})

// /* Fetchs */
// //não acessa arquivo interno, tem que ser via protocolo HTTP
// //pode analisar o JSON em 'NETWORK' no Console do navegador
// function loadPosts() {
//     //retorna uma promisse (pode colocar em uma variavel)
//     //(url, {configs da request -opcional-}) por padrão ele faz request de GET
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(function(resultado){
//             console.log(resultado)
//             return resultado.json(); //traduz o fetch json, com retorno em promisse, fazendo com que tenha dois then
//         })
//             .then(function(json){
//                 console.log(json);
//                 document.getElementById('QuantidadePosts').innerHTML = json.length+' posts'
//                 montarBlog(json);
//             })
//         .catch(function(error){
//             console.log('Deu b.o'+error)
//         })
// }

/* fetch com async e await */
//Faz com que o código espere o resultado
//colocar o async na frente da função permite utilizar o await dentro dela


function montarBlog(lista) {
    let html = '';
    for(let i in lista) {
        html += '<h3>' + lista[i].title + '</h3>'
        html += lista[i].body+'<br />'
        html += '<hr/>'
    }
    document.getElementById('Posts').innerHTML = html
}

async function loadPosts() {
    let req = await fetch('https://jsonplaceholder.typicode.com/posts'); //espera a response deste cara
    let json = await req.json()
    montarBlog(json)
}

//Inserir posts 
// async function inserirPost() {
//     let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST', //enviar dados atráves do corpo da request
//         body: JSON.stringify({
//             title:'Teste',
//             body:'CorpodeTeste',
//             userID = 4
//         })
//         })
//     let json = await req.json();
//     console.log(json);
// }

/* upload de arquivos */
async function enviar() {
    let arquivo = document.getElementById('arquivo').files[0]; //pega o arquivo
    console.log(arquivo)

    let body = new FormData()
    body.append('title','Titulo');
    body.append('arquivo', arquivo);

    let req = await fetch('https://www.meusite.com.br/upload',{
        method: 'POST',
        body: body,
        headers: {
            'ContentType':'multipart/form-data'
        }
    })
}

/*Preview de thumbnails*/
