'''
DRY - Don't repeat yourself

Pequenas partes de código que realiza tarefa específica
Pode ou não receber ou retornar dados

def nome_da_função(parametro_de_entrada):
    bloco_da_função

Parametros: Declarados na definição
Argumentos: Declarado na chamada da função

'''

cores = ["verde","amarelo","azul","branco"]

print(cores)

def funcao():
    print("Oi \n ")
    return "tchau"

#ao ativar a função, imprimi o oi e não retorna o valor
funcao()

#ao atribuir a função a um valor, recebe o retorno
tchau = funcao()
print(tchau)

#o return finaliza a função
def quadrado_de_7():
    return 7*7

valor = quadrado_de_7()
print(valor)
print(f'O valor do quadrado de {"7"} é {quadrado_de_7()}')

def valores():
    return "\n1","2","3"

valor1, valor2, valor3 = valores()
print(valor1, valor2)

def impar():
    numero = 6
    if numero % 2 == 0:
        return "Par"
    return "Impar"

print(impar())

#Funções com parametros
def parabens(aniversariante):
    print(f"\nParabens sr. {aniversariante}")

parabens("Lucas")

def soma(a,b):
    return a + b

print(soma(1,1))
print(soma(a=2, b=3))
print("\n")

#Parametros opcionais
def exponencial(numero, potencia=2): #os definidos vem sempre no final por padrão
    return numero ** potencia

print(exponencial(2,3)) #8
print(exponencial(2))

print("\n")

def soma(a,b):
    return a+b

def sub(a,b):
    return a-b

def mat(num1,num2,fun=soma):
    return fun(num1, num2)

print(mat(1,1))
print(mat(1,1,sub))

print("\n")

#A variável local sempre vem antes da global
instrutor = "Lucas" #global
def diz_oi():
    return f'oi{instrutor}'
print(diz_oi())

def diz_oi():
    instrutor = "Oioi" #local (só existe dentro da função)
    return f'oi{instrutor}'
print(diz_oi())

total = 0
def incrementa():
    #total = 5
    global total #avisa que quer puxar a variável global
    total = total+1
    return total

print(incrementa())

def documentacao(numero, potencia=2): #coloca a aspas triplas duplas para gerar a documentação
    """
    :param numero: Número que desejamos
    :param potencia: Potência que desejamos
    :return: valor calculado
    """

#*args são parametros imutáveis dados por uma tupla, funções usam args
def argss(*args):
    return args

print(argss())
print(argss(1))

def soma_todos_numeros(*args):
    total = 0
    for numero in args:
        total = total + numero
    return total

print(soma_todos_numeros(1,2,6,8))
print(soma_todos_numeros(1,1,1,1))

numeros = [1,2,3,4,5,6]
print(soma_todos_numeros(*numeros)) #o asterisco informa que estamos passando como argumento uma coleção de dados



def mostra_nomes(**kwargs):
    return f"{kwargs['nome']} {kwargs['sobrenome']}"

print(mostra_nomes(nome="Felicidade", sobrenome="Demais")) #o double asterisco só aceita argumentos nomeados, como um dicionário

