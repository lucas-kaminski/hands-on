from datetime import datetime


class Pessoa:
    def __init__(self, nome, cpf, telefone, endereco):
        self.nome = nome
        self.cpf = cpf
        self.telefone = telefone
        self.endereco = endereco


class Funcionario(Pessoa):
    def __init__(self, nome, cpf, telefone, endereco, clt, cargo):
        super(Funcionario, self).__init__(nome, cpf, telefone, endereco)
        self.clt = clt
        self.cargo = cargo


class Cliente(Pessoa):
    def __init__(self, nome, cpf, telefone, endereco, cnh):
        super(Cliente, self).__init__(nome, cpf, telefone, endereco)
        self.cnh = cnh


class Fornecedor(Pessoa):
    def __init__(self, nome, cpf, telefone, endereco, cnpj, empresa):
        super(Fornecedor, self).__init__(nome, cpf, telefone, endereco)
        self.cnpj = cnpj
        self.empresa = empresa


class Automovel:
    def __init__(self, modelo, ano, marca, placa, condicao):
        self.modelo = modelo
        self.marca = marca
        self.ano = ano
        self.placa = placa
        self.condicao = condicao


class Venda:
    def __init__(self, vendedor: Pessoa, comprador: Cliente, automovel, parcelas, forma_de_pagamento):
        self.vendedor = vendedor
        self.comprador = comprador
        self.automovel = automovel
        self.parcelas = parcelas
        self.forma_de_pagamento = forma_de_pagamento
        self.data = datetime.now().strftime("%d/%m/%Y")


class Compra:
    def __init__(self, automovel: Automovel, fornecedor: Fornecedor, quantidade):
        self.automovel = automovel
        self.fornecedor = fornecedor
        self.quantidade = quantidade
        self.data = datetime.now().strftime("%d/%m/%Y")
