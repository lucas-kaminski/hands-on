class Pessoas:
    #altura =  2 |#atributo da classe
    def __init__(self, altura, idade, nome): #ao declarar no metodo construtor, não é possível acessar de outro local, afinal, variável local
        self.altura = altura #atributo do metodo
        self.idade = idade #mas ele está disponível fora do metodo por causa do self
        self.nome = nome #só pode dentro de metodos

    def mostrar(self):
        print(self.nome)
        print(self.idade)
        print(self.altura)

p1 = Pessoas(5,20,"Lucas")
p1.mostrar()
print(p1.idade)
#print(idade) error

#atributo de classe
class Sol:
    temperatura = 50000 #instancias imutaveis
    tamanho = 100000 #cada pessoa tem uma altura, mas o sol só tem um
    distancia = 200000

print('\n', Sol.temperatura)

Sol.temperatura = 10 #pode mudar o atributo fora da classe

print(Sol.temperatura)