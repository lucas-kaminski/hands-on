'''
1º - Variáveis globais
    Reconhecidas geral

2º - Variáveis locais
    Somente ao bloco declarado
'''

numero = 42 #global

if numero > 10:
    numero = numero + 10 #local do bloco

print(numero)