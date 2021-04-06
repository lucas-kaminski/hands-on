'''
Ao criar o dicionario, pode se criar usando um valor default (pode ser lambda)
Sempre será utilizado um valor quando não definido
Se usar com index inexistente, será criada a chave e dada o valor default
'''
#dicionario normal
dicionario = {"chave":"curso"}
print(dicionario)
print(dicionario["chave"])

#default dict
from collections import defaultdict

dicionario = defaultdict(lambda: 0)
print(dicionario)
dicionario["Curso"] = "Programação"
print(dicionario)
print(dicionario["ErroCriado"])
print(dicionario)