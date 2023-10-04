'''
named tuple ->
especifica um nome e parametrôs

'''

from collections import namedtuple

#1
cachorro = namedtuple("cachorro", "idade raca nome")
#2
cachorro2 = namedtuple("cachorro", "idade, raca, nome")
#3
cachorro3 = namedtuple("cachorro", ["idade", "raca", "nome"])

print(cachorro, cachorro2, cachorro3)

ray = cachorro(idade=2, raca="Chiuaua", nome="Ray")
print(ray)
print(ray[1])
print(cachorro)

print(ray.idade)
print(ray.nome)
print(ray.raca)

print(ray.index("Chiuaua"))
print(ray.count("Chiuaua"))