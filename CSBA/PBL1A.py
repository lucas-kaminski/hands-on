class Pessoa():
    def __init__(self, nome, endereco, telefone):
        self.nome = str(nome)
        self.   endereco = str(endereco)
        self.telefone = str(telefone)
    
    def getNome(self):
        return self.nome
    
    def getTelefone(self):
        return self.telefone

class Peca():
    def __init__(self, nome, descricao, valor, tipo):
        self.nome = str(nome)
        self.descricao = str(descricao)
        self.valor = float(valor)
        self.tipo = str(tipo)
    
    def getNome(self):
        return self.nome
    
    def getDescricao(self):
        return self.descricao
    
    def getValor(self):
        return self.valor
     
    def getTipo(self):
        return self.tipo

class Equipamento():
    def __init__(self, nome, descricao, valorManutencao, dataAdicao, fabricante, responsavel, *ListaPecas):
        self.nome = str(nome)
        self.descricao = str(descricao)
        self.valorManutencao = float(valorManutencao)
        self.dataAdicao = str(dataAdicao)
        self.fabricante = str(fabricante)
        self.responsavel = responsavel
        self.ListaPecasEq = []
        for i in ListaPecas:
            self.ListaPecasEq.append(i)

    def getNome(self):
        return self.nome
    
    def getDescricao(self):
        return self.descricao
    
    def getValorManutencao(self):
        return self.valorManutencao
     
    def getResponsavel(self):
        return self.responsavel.nome

class Ferramenta():
    def __init__(self, nome, descricao, tipo, responsavel):
        self.nome = str(nome)
        self.descricao = str(descricao)
        self.tipo = str(tipo)
        self.responsavel = responsavel
    
    def getNome(self):
        return self.nome
    
    def getDescricao(self):
        return self.descricao

    def getResponsavel(self):
        return self.responsavel.nome

class Departamento():
    def __init__(self, nome, localizacao, *equipamentos_escolhidos):
        self.nome = nome
        self.localizacao = localizacao
        self.equipamentos = []
        for i in equipamentos_escolhidos:
            self.equipamentos.append(i)

    def listaEquipamentos(self):
        for i in self.equipamentos:
            print(f'O departamento {self.nome} utiliza o equipamento: {i.nome}')
        return "--"

    def adicionaEquipamento(self, novo_equipamento):
        self.equipamentos.append(novo_equipamento)
        return "Adicionado com sucesso \n"
    
    def excluiEquipamento(self):
        print("Lista de equipamentos:")
        for i, equipamento in enumerate(self.equipamentos):
            print(f'{i} | {equipamento.nome}')
        escolha = int(input("Qual o equipamento a ser removido? (Digite o número) "))
        self.equipamentos.pop(escolha)
        Departamento.listaEquipamentos
        return "Excluido com sucesso!"

#Definindo uma pessoa
pessoa1 = Pessoa("Lucas","Rockfeller","41998119091")

#Definindo duas peças
peca1 = Peca("Mandril","Afrouxador",5.50,"Auxiliar")
peca2 = Peca("Serra","Cortador de madeira",155.25,"Ferramenta")

#Definindo um equipamento, atribuindo a pessoa e peças definidas antes
eq1 = Equipamento("Furadeira","Máquina de furar a parede",100,"29/12/2000","Toys", pessoa1, peca1, peca2)

#Definindo uma ferramenta, atribuindo a pessoa definida antes
ferr1 = Ferramenta("Martelo", "Martelador", "Pesado", pessoa1)

#Por ultimo, definindo o departamento com peças repetidas
dep1 = Departamento("ABC","PUCPR",eq1, eq1)
print("Método 1:")
dep1.listaEquipamentos()
print("\n \nMétodo 2:")
print(dep1.adicionaEquipamento(eq1))
print("\n \nMétodo 3:")
print(dep1.excluiEquipamento())