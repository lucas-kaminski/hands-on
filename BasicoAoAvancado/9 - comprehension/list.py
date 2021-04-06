'''
Utilizando list comprehension, gera uma lista a partir de outro dado iterável

#Sintaxe
[ dado for dado in interavel ]
'''

numero = [1, 2, 3, 4, 5]
res = [numero * 10 for numero in numero]

print(res)

#numero * 10: operação da comprehension
#for numero in numero: aplicação lógica

print([numero*2 for numero in numero])

#---

numeros = [1, 2, 3, 4, 5]

pares = [numero for numero in numeros if numero % 2 == 0]
print(pares)
impares = [a for a in numeros if a % 2 != 0]
print(impares)
