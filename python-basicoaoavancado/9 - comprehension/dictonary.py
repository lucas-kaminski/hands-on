numeros = {"a":1, "b":2, "c":3}
quadrado = {chave+chave:valor ** 2 for chave, valor in numeros.items()}
print(quadrado)

numeros2 = [1, 2, 3, 4, 5]
quadrados = {valor: int(valor) ** 2 for valor in numeros2}
print(quadrados)

chaves = "abcdefghij"
numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mistura = {chaves[i]: numeros3[i] for i in range(0, len(chaves))}
print(mistura)