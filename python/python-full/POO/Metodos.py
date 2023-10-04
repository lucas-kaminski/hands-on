class Pessoas:
    def __init__(self): #ao instânciar (declarar variavel) ele retorna esta função
        print("Atribuído com sucesso")

    def atribuir(self, altura, idade, nome):
        self.altura = altura
        self.idade = idade
        self.nome = nome

p1 = Pessoas()

class PessoasConstruída:
    def __init__(self, altura, idade, nome):
        self.altura = altura
        self.idade = idade
        self.nome = nome
        print("Atribuído com sucesso")

p2 = PessoasConstruída(1.10, 10, "Ihul")

print("\n \n")

#Metodos de classe servem para serem chamados sem instancia
#Abona o self, declara cls

class Sol:
    temperatura = 50000

    def __init__(self):
        print("oi, ao atribuir eu sou retornardo")

    @classmethod
    def iluminar(cls):
        temperatura = 1
        cls.teste = "oi"
        print(cls.temperatura)
        print(temperatura)

Sol.iluminar() #se n chamar a classe, não é criado a variavel
print(Sol.teste)
oi = Sol()
print(oi.teste)