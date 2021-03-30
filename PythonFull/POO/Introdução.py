#Organizar o código em entidades (Classe, métodos e atributos)
#Uma pessoa pode ser uma entidade
#Nome, idade, peso são atributos
z#Metodos são as ações realiadas pela pessoa

#O método __init__ é o construtor, ao instânciar é o que é chamado


class Pessoas: #entidade que segue um padrão
    def atribuir(self, altura, idade, nome): #metodos
        self.altura = altura #atributos
        self.idade = idade
        self.nome = nome

    def mostrar(self):
        print(self.altura)

p1 = Pessoas()
p1.atribuir(1.73, 20, "Lucas")
p1.mostrar()

p2 = Pessoas()
p2.atribuir(2.00,23,"Vanessa")
p2.mostrar()