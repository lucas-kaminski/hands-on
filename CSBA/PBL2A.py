##Definição das classes
class Cliente:
    def __init__(self, *listaCheques, **DicCliente):
        self.codigo = DicCliente.pop('codigo',0)
        self.nome = DicCliente.pop('nome','--')
        self.fone = DicCliente.pop('fone','(--) ----- ----')
        self.data = DicCliente.pop('data','--/--/--')
        self.endereco = DicCliente.pop('endereco','--')
        self.cidade = DicCliente.pop('cidade','--')
        self.UF = DicCliente.pop('UF','--')
        self.tipo = DicCliente.pop('tipo','--')
        self.cheques = [i for i in listaCheques]
    
    def adicionaCheque(self, cheque_novo):
        return self.cheques.append(cheque_novo)
    
    def excluiCheque(self, cheque_escolhido):
        return self.cheques.remove(cheque_escolhido)

class Banco:
    lista_bancos = []
    def __init__(self,  *listaContas, **DicBanco):
        self.numBanco = DicBanco.pop('numBanco',0)
        self.agencia = DicBanco.pop('agencia','--')
        self.nome = DicBanco.pop('nome','--')
        self.endereco = DicBanco.pop('endereco','--')
        self.cidade = DicBanco.pop('cidade','--')
        self.UF = DicBanco.pop('UF','--')
        self.contas = [i for i in listaContas]
        self.__class__.lista_bancos.append(self)
    
    def adicionaConta(self, conta_nova):
        return self.contas.append(conta_nova)
    
    def excluiConta(self, conta_escolhida):
        return self.contas.remove(conta_escolhida)

class CCorrente:
    def __init__(self, **DicCCorrente):
        self.numConta = DicCCorrente.pop('numConta','--')
        self.cliente = DicCCorrente.pop('cliente')
        self.__saldo = DicCCorrente.pop('saldo',0.0)
    
    def getSaldo(self):
        return self.__saldo
    
    def fazSaque(self, valor_sacado):
        self.__saldo -= int(valor_sacado)
    
    def fazDeposito(self, valor_depositado):
        self.__saldo += int(valor_depositado)
        

class Cheque:
    def __init__(self, **dicCheque):''
        self.numConta = dicCheque.pop('numConta','--')
        self.numCheque = dicCheque.pop('numCheque','--')
        self.valor = dicCheque.pop('valor',0.0)
        self.dta_emissao = dicCheque.pop('dta_emissao','--/--/--')
        self.dta_vcto = dicCheque.pop('dta_vcto','--/--/--')
        self.dta_deposito = dicCheque.pop('dta_deposito','--/--/--')
        self.obs_verso = dicCheque.pop('obs_verso','--')

class PFisica:
    def __init__(self, **dicPFisica):
        self.cliente = dicPFisica.pop('cliente')
        self.CPF = dicPFisica.pop('CPF','---.---.--- --’')
        self.RG = dicPFisica.pop('RG','-.---.--- -')
    
    def emitirFicha(self):
        ficha = (f'''
    Cliente: {self.cliente.nome}
    CPF: {self.CPF}
    RG: {self.RG}
    End.: {self.cliente.endereco}
    Cidade: {self.cliente.cidade} - UF: {self.cliente.UF}
    ''')
        return ficha

class PJuridica:
    def __init__(self, **dicPJuridica):
        self.cliente = dicPJuridica.pop('cliente')
        self.CNPJ = dicPJuridica.pop('CNPJ','---.---.---/---- --')
        self.INSC = dicPJuridica.pop('INSC','--')
    
    def emitirFicha(self):
        ficha = (f'''
    Cliente: {self.cliente.nome}
    CNPJ: {self.CNPJ}
    End.: {self.cliente.endereco}
    Cidade: {self.cliente.cidade} - UF: {self.cliente.UF}
    ''')
        return ficha

## Instanciações de objetos
cheque1 = Cheque(numConta="11",numCheque="4065",valor=5,dta_emissao="11/11/2015",dta_vcto="21/11/2011",dta_deposito="13/11/2011",obs_verso="Sempre")
cheque2 = Cheque(numConta="22",numCheque="4066",valor=5,dta_emissao="29/12/2000",dta_vcto="10/01/2001",obs_verso="Acredite")
cheque3 = Cheque(numConta="33",numCheque="4067",valor=51.25,dta_emissao="10/01/2020",dta_vcto="10/01/2021",obs_verso="O mundo é loco")
cheque4 = Cheque(numConta="44",numCheque="4068",valor=1005,dta_emissao="15/06/2016",dta_deposito="01/05/2025",obs_verso="ixi")
cheque5 = Cheque(numConta="55",numCheque="4069",valor=11156,dta_emissao="15/09/2019",dta_vcto="25/10/2020",dta_deposito="10/05/2021",obs_verso="")
cheque6 = Cheque(numConta="66",numCheque="4070",valor=136,dta_emissao="15/08/2018",dta_vcto="17/07/2019",dta_deposito="15/09/2018",obs_verso="me paga bro")
cheque7 = Cheque(numConta="77",numCheque="4090",valor=789,dta_emissao="17/07/2017",dta_vcto="17/07/2017",dta_deposito="17/07/2017",obs_verso="...")
cheque8 = Cheque(numConta="88",numCheque="5901",valor=4897.10,dta_emissao="01/05/2025",dta_vcto="05/05/2025",dta_deposito="03/05/2025")
cheque9 = Cheque(numConta="99",numCheque="4843",valor=20.25,dta_emissao="01/03/2013",dta_deposito="10/01/2020",obs_verso="")
cheque10 = Cheque(numConta="1010",numCheque="484",valor=1598.10,dta_emissao="01/02/2003",dta_vcto="01/03/2013",dta_deposito="01/07/2017",obs_verso="depositar para dia 01/07/2017")
cheque11 = Cheque(numConta="1111",numCheque="404",valor=300,dta_emissao="05/05/2015",dta_vcto="01/08/2018",dta_deposito="01/07/2017",obs_verso="desliga o mic")
cheque12 = Cheque(numConta="1212",numCheque="2679",valor=500,dta_emissao="03/08/2028",dta_vcto="07/04/2021",obs_verso="abaixa o volume")

cliente1 = Cliente(cheque1, cheque2, codigo="1", nome="Lucas Kaminski", fone="(41) 998119091", data="29/12/2000", endereco="Rua Bona Busnello", cidade="Curitiba", UF="PR", tipo="PF")
cliente2 = Cliente(cheque2, codigo="2", nome="Pedro", fone="(41) 98818-1585", data="09/10/2008", endereco="Rua Westhpallen", cidade="Curitiba", UF="PR", tipo="PF")
cliente3 = Cliente(cheque3, codigo="3", nome="Vanessa", fone="(41) 99944-4764", data="17/03/2019", endereco="Rua Amazonas", cidade="Curitiba", UF="PR", tipo="PF")
cliente4 = Cliente(cheque4, codigo="4", nome="Roberta", fone="(41) 99811-5580", data="01/01/2020", endereco="Avenida Kennedy", cidade="Curitiba", UF="PR", tipo="PF")
cliente5 = Cliente(cheque5, cheque2, cheque7, codigo="5", nome="Josélia", fone="(41) 88825-1236", data="05/04/1970", endereco="Rua Amapá", cidade="Curitiba", UF="PR", tipo="PF")
cliente6 = Cliente(cheque6, codigo="6", nome="Luigia", fone="(41) 998815-1070", data="21/12/2020", endereco="Rua Estado Unidos", cidade="Curitiba", UF="PR", tipo="PF")
cliente7 = Cliente(cheque7, cheque5, codigo="7", nome="Cientista", fone="(41) 99651-5861", data="10/10/2010", endereco="Rua WOW", cidade="Curitiba", UF="PR", tipo="PJ")
cliente8 = Cliente(cheque8, codigo="8", nome="Lucca", fone="(41) 98814-9899", data="19/12/2001", endereco="Rua dos Belo", cidade="Curitiba", UF="PR", tipo="PJ")
cliente9 = Cliente(cheque9, codigo="9", nome="Eng. Mecânico", fone="(41) 999815-2541", data="03/07/2007", endereco="Planalto dos Ministério", cidade="Curitiba", UF="PR", tipo="PJ")
cliente10 = Cliente(cheque10, codigo="10", nome="Gilmar", endereco="Rua Concreto", cidade="Curitiba", UF="PR", tipo="PJ")
cliente11 = Cliente(cheque11, codigo="11", nome="Eng. Elétrico", fone="(41) 99811-0474", data="15/05/2020", tipo="PJ")
cliente12 = Cliente(cheque12, codigo="12", nome="Eng. engenharista", data="29-12-2000", endereco="Rua None", cidade="Pato Branco", UF="PR", tipo="PJ")

ccorrente1 = CCorrente(numConta="11", cliente=cliente1, saldo=5)
ccorrente2 = CCorrente(numConta="22", cliente=cliente2, saldo=25)
ccorrente3 = CCorrente(cliente=cliente3, saldo=154)
ccorrente4 = CCorrente(numConta="44", cliente=cliente4, saldo=20.5)
ccorrente5 = CCorrente(numConta="55", cliente=cliente5, saldo=100.01)
ccorrente6 = CCorrente(numConta="66", cliente=cliente6, saldo=55.50)

banco1 = Banco(ccorrente1, numBanco=11, agencia="3186", nome="BB", endereco="Rua Raiz Culturual", cidade="Curitiba", UF="PR")
banco2 = Banco(ccorrente2, numBanco=22, agencia="1576", nome="Trem", endereco="Rua Caqui", cidade="Curitiba", UF="PR")
banco3 = Banco(ccorrente3, numBanco=33, nome="Locomotiva", endereco="Rua Vagão", cidade="Curitiba", UF="PR")
banco4 = Banco(ccorrente4, numBanco0=44, agencia="2021", endereco="Rua Não para não", cidade="São Luiz", UF="MA")
banco5 = Banco(ccorrente5, numBanco=55, agencia="0512", nome="Apito bank", endereco="Rua wow tbm", cidade="Curitiba", UF="PR")
banco6 = Banco(ccorrente6, numBanco=66, agencia="1574", nome="Ta acabando ufa", endereco="Rua métodos construtores", cidade="Curitiba", UF="PR")

Pfisica1 = PFisica(cliente=cliente1, CPF="165.849.189-20", RG="1.589.987 25")
Pfisica2 = PFisica(cliente=cliente2, CPF="116.741.589-20", RG="1.401.534 27")
Pfisica3 = PFisica(cliente=cliente3, CPF="089.698.182-15", RG="1.659.784 29")
Pfisica4 = PFisica(cliente=cliente4, CPF="159.896.978-92", RG="2.569.748 2")
Pfisica5 = PFisica(cliente=cliente5, CPF="659.489.980-88", RG="2.879.698 3")
Pfisica6 = PFisica(cliente=cliente6, CPF="489.698.487-52")

PJurdica1 = PJuridica(cliente=cliente7, CNPJ="131.159.289/0001-20", INSC="90596795-87")
PJurdica2 = PJuridica(cliente=cliente8, CNPJ="157.598.298/0001-30", INSC="184876479-87")
PJurdica3 = PJuridica(cliente=cliente9, CNPJ="398.598.584/0001-55", INSC="1887549-78")
PJurdica4 = PJuridica(cliente=cliente10, CNPJ="157.987.985/0001-99", INSC="484364318-4")
PJurdica5 = PJuridica(cliente=cliente11, CNPJ="015.589.987/0002-70", INSC="NÃO OPTANTE")
PJurdica6 = PJuridica(cliente=cliente12, CNPJ="154.598.298/0009-58")

##Comandos solicitados

#8.1
cliente1.adicionaCheque(cheque10)

#8.2
def lista():
    for i in cliente1.cheques:
        print(f'Numero: {i.numCheque} | Valor: {i.valor} | Depositado em: {i.dta_deposito}')

print("\n")
lista()

#8.3
cliente1.excluiCheque(cheque10)

#8.4 (Utilizo a função definida no 8.2)
print("\n")
lista()

#8.5
print(Pfisica1.emitirFicha())

#8.6
print(PJurdica1.emitirFicha())

#8.7
print(f'Nome: {PJurdica1.cliente.nome}')
for i in PJurdica1.cliente.cheques:
    print(f'Valor: {i.valor} | Número: {i.numCheque}')
print("\n")

#8.8
for bancos in Banco.lista_bancos:
    for contas in bancos.contas:
        for cheque in contas.cliente.cheques:
            contas.fazSaque(cheque.valor)
    print(f'Para o(a) cliente {contas.cliente.nome}, após ser depositado todos os cheques, o saldo fica {contas.getSaldo()} R$')