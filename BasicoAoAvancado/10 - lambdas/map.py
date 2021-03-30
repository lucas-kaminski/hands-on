"""
Com o map, faz se o mapeamento de valores
Recebe dois valores (função, iteravel)

"""

import math

area = lambda r: math.pi * (r ** 2)
raios = [2, 5, 10, 8, 7, 2.2]
print(area(2))
areas = map(area, raios)
print(type(areas)) #retorna um valor de memória (object) que pode ser convertido para o que quiser
print(list(areas))

#Resumo:
#Tem dados, tem uma função
#O map pega a função e aplica dado a dado

cidades = [("Berlim", 25), ("Curitiba",32)]
print(cidades)
c_para_f = lambda dado: (dado[0], (9/5)*dado[1]+32, "oi")
print(list(map(c_para_f, cidades)))