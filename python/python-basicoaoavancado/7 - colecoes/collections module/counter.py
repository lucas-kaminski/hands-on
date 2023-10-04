'''
contador
não built-in (puxa fora do python original)
Collections -> tipos de dados container de alta performance
(container é o tipo de dado de listas, tuplas..)

recebe um parametro interavel e cria um objeto Counter que é parecido com o dicionário
    chave->elemento da lista
    valor->quantidade de ocorrencias de valor
'''

from collections import Counter

lista = [1,1,2,2,6,455,2,3,458,269,484,1,36,264,3,1,1,32,2,9]

res = Counter(lista)
print(res)
print(type(res))
#para cada elemento uma chave e seu valor a sua respectiva contagem
print(Counter("Lucas Kaminski"))

texto = """
A demanda por programadores Python nunca esteve tão alta, afinal, Python é uma das linguagens mais utilizadas no mundo e
requisito para se trabalhar com Ciência de Dados e Inteligência Artificial.
Além disso, a demanda por profissionais Python para trabalhar com a Internet utilizando algum dos frameworks web mais
populares como Django, Flask ou Tornado tem crescido muito nos últimos anos.
"""

texto_splitado = texto.split()

humm = Counter(texto)
print(humm)
humm = Counter(texto_splitado)
print(humm)
print("")

print(humm.most_common(5))

