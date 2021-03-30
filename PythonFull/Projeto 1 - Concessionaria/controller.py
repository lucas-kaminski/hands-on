from models import *


cadastro_funcionario = []
cadastro_cliente = []
cadastro_fornecedor = []
cadastro_automovel = []
estoque = []
vendas = []
compras = []

class ControllerPessoa:
    @classmethod
    def salvar(cls, escolha_cadastro: object, cadastro: object) -> object:
        #1: Funcionário | 2:Cliente | 3:Fornecedor
        if escolha_cadastro == 1:
            cadastro_funcionario.append([cadastro.nome, cadastro.cpf, cadastro.telefone, cadastro.telefone, cadastro.clt, cadastro.cargo])
        elif escolha_cadastro == 2:
            cadastro_cliente.append([cadastro.nome, cadastro.cpf, cadastro.telefone, cadastro.telefone, cadastro.cnh])
        elif escolha_cadastro == 3:
            cadastro_fornecedor.append([cadastro.nome, cadastro.cpf, cadastro.telefone, cadastro.telefone, cadastro.cnpj, cadastro.empresa])

    @classmethod
    def alterar(cls, escolha_cadastro, dado0, dado1, dado2):
        if escolha_cadastro == 1:
            cadastro_funcionario[dado0][dado1] = dado2
        elif escolha_cadastro == 2:
            cadastro_cliente[dado0][dado1] = dado2
        elif escolha_cadastro == 3:
            cadastro_fornecedor[dado0][dado1] = dado2

    @classmethod
    def excluir(cls,escolha_cadastro, dado):
        if escolha_cadastro == 1:
            cadastro_funcionario.pop(int(dado))
        elif escolha_cadastro == 2:
            cadastro_cliente.pop(int(dado))
        elif escolha_cadastro == 3:
            cadastro_fornecedor.pop(int(dado))


class ControllerAutomovel:
    @classmethod
    def salvar(cls, automovel):
        cadastro_automovel.append([automovel.modelo, automovel.marca, automovel.ano, automovel.placa,
                                   automovel.condicao])

    @classmethod
    def alterar(cls, escolha_cadastro, escolha_dado, dado_novo):
        cadastro_automovel[escolha_cadastro][escolha_dado] = dado_novo

    @classmethod
    def excluir(cls, escolha_cadastro):
        cadastro_automovel.pop(int(escolha_cadastro))


class Vendas:
    @classmethod
    def vender(cls, escolha_estoque, venda):
        vendas.append([venda.vendedor, venda.comprador, venda.automovel, venda.parcelas, venda.forma_de_pagamento, venda.data])
        estoque.pop(escolha_estoque)

    @classmethod
    def comprar(cls, compra):
        compras.append([compra.automovel, compra.fornecedor, compra.quantidade, compra.data])
        for i in range(0, compra.quantidade):
            estoque.append([compra.automovel, compra.fornecedor, compra.data])


class Menus:
    def menu_cadastro_automovel() -> object:
        """

        :rtype: object
        """
        modelo = str(input("Modelo do carro: "))
        marca = str(input("Marca do carro: "))
        ano = int(input("Ano do carro: "))
        placa = str(input("Placa do carro: "))
        condicao = str(input("Condição: "))
        return [modelo, marca, ano, placa, condicao]

    def menu_cadastro_pessoa() -> object:
        nome = str(input("Insira o nome:"))
        cpf = str(input("Insira o CPF:"))
        telefone = int(input("Insira o telefone:"))
        endereco = str(input("Insira o endereço:"))
        return [nome, cpf, telefone, endereco]


class Relatorios:
    def funcionarios():
        for i in range(0,len(cadastro_funcionario)):
            print(f'{i} | {cadastro_funcionario[i]}')

    def clientes():
        for i in range(0, len(cadastro_cliente)):
            print(f'{i} | {cadastro_cliente[i]}')

    def fornecedores():
        for i in range(0, len(cadastro_fornecedor)):
            print(f'{i} | {cadastro_fornecedor[i]}')

    def automoveis():
        for i in range(0,len(cadastro_automovel)):
            print(f'{i} | {cadastro_automovel[i]}')

    def compras():
        for i in range(0,len(compras)):
            print(f'{i} | {compras[i]}')

    def vendas():
        for i in range(0,len(vendas)):
            print(f'{i} | {vendas[i]}')

    def estoque():
        for i in range(0,len(estoque)):
            print(f'{i} | {estoque[i]}')