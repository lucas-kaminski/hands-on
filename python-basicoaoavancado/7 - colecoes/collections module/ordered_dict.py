'''


'''
#em normal, a ordem não é garantida
dicionario = {"a":1, "b":2, "c":3, "d":4}
print(dicionario)

from collections import OrderedDict
dicionario = OrderedDict(dicionario)

for chave, valor in dicionario.items():
    print(chave, valor)

dict1 = {"a":1, "b":2}
dict2 = {"b":2, "a":1}

print(dict1 == dict2)

#"--"

odict1 = OrderedDict(dict1)
odict2 = OrderedDict(dict2)

print(odict1 == odict2)

