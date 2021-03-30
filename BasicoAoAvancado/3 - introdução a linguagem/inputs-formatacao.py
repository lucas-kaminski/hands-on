'''
Dados recebidos por input, por padrão é string
'''

print("Qual o seu nome?")
nome = input()

idade = input("Qual a sua idade?")

#formatação 2.x
print("Seja bem vindo(a) %s"%nome)
#formatação 3.x
print("Seja bem vindo(a) {0}, você tem {1} anos".format(nome, idade))
#formatação 3.7
print(f"Seja bem vindo(a) {nome}, você tem {idade} anos")
print(f"Seja bem vindo(a) {nome}, você nasceu em {2020 - int(idade)} anos")

