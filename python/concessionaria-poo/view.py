from controller import *

sair_menu = None
erro = "Valor inserido errado, inserir novamente por favor \n"

print("*** Concessionária Kaminski ***")
while sair_menu is None:
    escolha_menu = int(input(
        """*** Menu ***
        1 - Cadastros
        2 - Compra/Venda
        3 - Relatórios
        0 - Finalizar aplicação
        """))

    if escolha_menu == 1:
        while escolha_menu != 9:
            escolha_menu = int(input(
            """** Menu - Cadastros **
            1 - Automóveis
            2 - Clientes
            3 - Fornecedores
            4 - Funcionários
            9 - Sair 
            """))

            if escolha_menu == 1:
                while escolha_menu != 8:
                    escolha_menu = int(input(
                    """* Menu - Cadastros - Automoveis
                    1 - Cadastrar novo
                    2 - Alterar cadastrado
                    3 - Excluir
                    8 - Voltar
                    """
                    ))

                    if escolha_menu == 1:
                        automovel_cadastrado = Menus.menu_cadastro_automovel()
                        ControllerAutomovel.salvar(Automovel(automovel_cadastrado[0], automovel_cadastrado[1], automovel_cadastrado[2],
                                                                       automovel_cadastrado[3], automovel_cadastrado[4]))

                    elif escolha_menu == 2:
                        Relatorios.automoveis()
                        escolha1 = int(input("Selecione o cadastro a ser alterado: "))
                        for i in range(0, len(cadastro_automovel[escolha1])):
                            print(f'{i} | {cadastro_automovel[escolha1][i]}')
                        escolha2 = int(input("Selecione o dado a ser alterado: "))
                        escolha3 = input("Insira o novo dado: ")
                        ControllerAutomovel.alterar(escolha1, escolha2, escolha3)
                        print("Dado alterado com sucesso, confira:", cadastro_automovel[escolha1])

                    elif escolha_menu == 3:
                        Relatorios.automoveis()
                        escolha_cadastro = int(input("Selecione o cadastro a ser excluído: "))
                        ControllerAutomovel.excluir(escolha_cadastro)

                    elif escolha_menu == 8:
                        break

                    else:
                        print(erro)


            elif escolha_menu == 2:
                while escolha_menu != 8:
                    escolha_menu = int(input(
                        """* Menu - Cadastros - Clientes
                        1 - Cadastrar novo
                        2 - Alterar cadastrado
                        3 - Excluir
                        8 - Voltar
                        """))

                    if escolha_menu == 1:
                        pessoa_cadastrada = Menus.menu_cadastro_pessoa()
                        cnh = input("Informa a CNH: ")
                        ControllerPessoa.salvar(2, Cliente(pessoa_cadastrada[0], pessoa_cadastrada[1], pessoa_cadastrada[2],
                                                           pessoa_cadastrada[3], cnh))

                    elif escolha_menu == 2:
                        Relatorios.clientes()
                        escolha = int(input("Selecione o cadastro a ser alterado: "))
                        for i in range(0, len(cadastro_cliente[escolha])):
                            print(f'{i} | {cadastro_cliente[escolha_][i]}')
                        escolha_dado = int(input("Selecione o dado a ser alterado: "))
                        dado_novo = input("Insira o novo dado: ")
                        ControllerPessoa.alterar(2,escolha,escolha_dado,dado_novo)
                        print("Dado alterado com sucesso, confira:", cadastro_cliente[escolha_cadastro])

                    elif escolha_menu == 3:
                        Relatorios.clientes()
                        escolha = int(input("Selecione o cadastro a ser excluído: "))
                        ControllerPessoa.excluir(2, escolha)

                    elif escolha_menu == 8:
                        break

                    else:
                        print(erro)

            elif escolha_menu == 3:
                while escolha_menu != 8:
                    escolha_menu = int(input(
                        """* Menu - Cadastros - Fornecedores
                        1 - Cadastrar novo
                        2 - Alterar cadastrado
                        3 - Excluir
                        8 - Voltar
                        """))

                    if escolha_menu == 1:
                        pessoa_cadastrada = Menus.menu_cadastro_pessoa()
                        cnpj = int(input("Informa o CNPJ: "))
                        empresa = str(input("Informa a empresa: "))
                        ControllerPessoa.salvar(3, Fornecedor(pessoa_cadastrada[0], pessoa_cadastrada[1], pessoa_cadastrada[2], pessoa_cadastrada[3], cnpj, empresa))

                    elif escolha_menu == 2:
                        Relatorios.fornecedores()
                        escolha = int(input("Selecione o cadastro a ser alterado: "))
                        for i in range(0, len(cadastro_fornecedor[escolha])):
                            print(f'{i} | {cadastro_fornecedor[escolha][i]}')
                        escolha_dado = int(input("Selecione o dado a ser alterado: "))
                        dado_novo = input("Insira o novo dado: ")
                        ControllerPessoa.alterar(3, escolha, escolha_dado, dado_novo)
                        print("Dado alterado com sucesso, confira:", cadastro_fornecedor[escolha])

                    elif escolha_menu == 3:
                        Relatorios.fornecedores()
                        escolha = int(input("Selecione o cadastro a ser excluído: "))
                        ControllerPessoa.excluir(3, escolha)

                    elif escolha_menu == 8:
                        break

                    else:
                        print(erro)

            elif escolha_menu == 4:
                while escolha_menu != 8:
                    escolha_menu = int(input(
                        """* Menu - Cadastros - Funcionários
                        1 - Cadastrar novo
                        2 - Alterar cadastrado
                        3 - Excluir
                        8 - Voltar
                        """))

                    if escolha_menu == 1:
                        pessoa_cadastrada = Menus.menu_cadastro_pessoa()
                        clt = int(input("Insira a CLT: "))
                        cargo = str(input("Insira o cargo: "))
                        ControllerPessoa.salvar(1, Funcionario(pessoa_cadastrada[0], pessoa_cadastrada[1],
                                                               pessoa_cadastrada[2],
                                                               pessoa_cadastrada[3], clt, cargo))

                    if escolha_menu == 2:
                        Relatorios.funcionarios()
                        escolha = int(input("Selecione o cadastro a ser alterado: "))
                        for i in range(0, len(cadastro_funcionario[escolha1])):
                            print(f'{i} | {cadastro_funcionario[escolha1][i]}')
                        escolha_dado = int(input("Selecione o dado a ser alterado: "))
                        dado_novo = input("Insira o novo dado: ")
                        ControllerPessoa.alterar(1, escolha, escolha_dado, dado_novo)
                        print("Dado alterado com sucesso, confira:", cadastro_funcionario[escolha1])

                    if escolha_menu == 3:
                        Relatorios.funcionarios()
                        escolha = int(input("Selecione o cadastro a ser excluído: "))
                        ControllerPessoa.excluir(1, escolha)

                    elif escolha_menu == 8:
                        break

                    else:
                        print(erro)

            elif escolha_menu == 9:
                break

            else:
                print(erro)

    elif escolha_menu == 2:
        while escolha_menu != 9:
            escolha_menu = int(input(
                """** Menu - Compra/Venda **
                1 - Efetuar uma compra de veículo
                2 - Vender um veículo
                9 - Sair
                """))

            if escolha_menu == 1:
                Relatorios.automoveis()
                escolha_automovel = int(input("Selecione o carro comprado: "))
                Relatorios.fornecedores()
                escolha_fornecedor = int(input("Selecione o fornecedor: "))
                escolha_quantidade = int(input(("Quantos comprados: ")))
                Vendas.comprar(Compra(cadastro_automovel[escolha_automovel], cadastro_fornecedor[escolha_fornecedor], escolha_quantidade))

            elif escolha_menu == 2:
                Relatorios.funcionarios()
                escolha_funcionario = int(input("Selecione o funcionário que realizou a venda: "))
                Relatorios.clientes()
                escolha_cliente = int(input("Selecione o cliente que realizou a compra: "))
                Relatorios.estoque()
                escolha_estoque = int(input("Selecione o carro comprado: "))
                parcelas = int(input("Em quantas parcelas foram compradas: "))
                forma_de_pagamento = str(input(("Forma de pagamento: ")))
                Vendas.vender(escolha_estoque, Venda(cadastro_funcionario[escolha_funcionario], cadastro_cliente[escolha_cliente], estoque[escolha_estoque], parcelas, forma_de_pagamento))


            elif escolha_menu == 9:
                break

            else:
                print(erro)

    elif escolha_menu == 3:
        while escolha_menu != 9:
            escolha_menu = int(input(
                """** Menu - Relatórios **
                1 - Cadastros 
                2 - Compras 
                3 - Vendas
                4 - Estoque (Garagem)
                9 - Sair
                """))
            if escolha_menu == 1:
                print("Relatório de clientes cadastrados no sistema")
                Relatorios.clientes()
                print("Relatório de carros cadastrados no sistema")
                Relatorios.automoveis()
                print("Relatório de fornecedores cadastrados no sistema")
                Relatorios.fornecedores()
                print("Relatório de funcionários")
                Relatorios.funcionarios()

            elif escolha_menu == 2:
                Relatorios.compras()

            elif escolha_menu == 3:
                Relatorios.vendas()

            elif escolha_menu == 4:
                Relatorios.estoque()

            elif escolha_menu == 9:
                break

            else:
                print(erro)

    elif escolha_menu == 0:
        sair_menu = True

    else:
        print(erro)