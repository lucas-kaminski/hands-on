'''
Entre aspas simples: string
'False', '23.4'
"False", "23.4"
'''
#'''False'''
#"""False"""

nome = "Lucas Kaminski"

nomen = "Lucas \n Kaminski" #quebra de linha

nome3 = """
Angelina
Joeli
"""

nomeupper = nome.upper() #tudo maiuscula
nomelower = nome.lower() #tudo minuscula
nomesplit = nome.split() #lista de caracteres
print(nomesplit[1])

#[0,    1,   2,   3,   4] Toda string é uma lista acessível por index
#['L', 'U', 'C', 'A', S']

print(nome[0:3]) #slice de string
print(nome[::-1]) #pega do final e vai descendo menos 1
