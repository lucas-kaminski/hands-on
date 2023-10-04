#Herdar algo de outra classe
#Classe filha que herda métodos e atributos de uma classe mãe

class Animais():
    def andar(self):
        print("Estou andando")

    def correr(self):
        print("Estou correndo")

    def pular(self):
        print("Estou pulando")

#herança simples
class Cachorro(Animais): #a herança é declarada
    def latir(self):
        print("Estou latindo")

class Gato(Animais):
    def miar(self):
        print("Miau")


x = Cachorro()
y = Gato()

x.correr()
y.correr()
y.miar()
#x.miar() #como não está na classe mãe o miar, o cachorro (filha) não tem o metodo


#Ordem de intepretação: Da mais filha -> para a mais pai
class Gato(Animais):
    def miar(self):
        print("Miau")

    def andar(self):
        print("Uau, andei") #esse é prioritário acima da classe

        super().andar()  # esse é o método para chamar o método da classe mestre

z = Gato()
z.andar()

#Herança Multipla
class Felino(Animais):
    def miar(self):
        print("Miar")

class Gato(Felino):
    def arranhar(self):
        print("skrr skrr")

aa = Gato()
aa.arranhar()
aa.miar()
aa.correr()

class Leão(Felino):
    def rugir(self):
        print("rawr")

bb = Leão()
bb.miar()
#bb.arranhar #não tem acesso ao arranhar pois está lado a lado na arvode de herança
