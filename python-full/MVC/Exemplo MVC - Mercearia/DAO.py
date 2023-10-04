from models import *
class DaoCategoria:
    @classmethod
    def salvar(cls, categoria):
        with open("Categoria.txt", "a") as arq:
            arq.writelines(categoria)
            arq.writelines("\n")

    @classmethod
    def ler(cls):
        with open("Categoria.txt", "r") as arq:
            cls.categoria = arq.readline()

        cls.categoria = list(map(lambda x: x.replace('\n', ""), cls.categoria))

        cat = []
        for i in cls.categoria:
            cat.append(Categoria(i))
        return cat

class DaoVenda:
    @classmethod
    def salvar(cls, venda: Venda):
        with open("Vendas.txt", "a") as arq:
            arq.writelines(venda.itens_vendidos.nome + "|" + venda.quantidade_vendida + "|" + venda.itens_vendidos.nome + "|" + venda.itens_vendidos.categoria + "|" + venda.comprador + "|" + str(venda.vendedor) + "|" + venda.data)
            arq.writelines("\n")

    @classmethod
    def ler(cls):
        with open("Vendas.txt", "r") as arq:
            cls.venda = arq.readlines()

        cls.venda = list(map(lambda x: x.replace('\n',''), cls.venda))
        cls.venda = list(map(lambda x: x.split("|"), cls.venda))
        print(cls.venda[0])
        lista_vendas = []
        for i in cls.venda:
            lista_vendas.append(Venda(Produtos(cls.venda[i][0],cls.venda[i][1],cls.venda[i][2],cls.venda[i][3])))

DaoVenda.ler()

