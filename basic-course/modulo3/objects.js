//listagem NOMEADA (dict)

var carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:800,
    ligado:false,
    ligar: function() {
        this.ligado = true;
        console.log(this.modelo); // referenciando o proprio object
        console.log('Função em object');
        if (this.ligado == true) {
            console.log(this.ligado);
        }
    }
}

//carro['modelo'] = 'unno'
//carro.ligar() -> Chamar a função
