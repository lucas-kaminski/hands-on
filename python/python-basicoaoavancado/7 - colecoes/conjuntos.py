'''
Conjuntos -> Teoria dos Conjuntos
Sets()
{} like dict
- Não possuem duplicidade
- Não possui ordenação
- Elementos não são acessados via index
- Não tem index

Bom para armazenar coisas com ordem fodase, não precisar preocupar com index, valores e itens não duplicados

    - O dicionário tem index e valor, o set só tem valor
'''

s = set({1,2,3,4,4,5,9,9,2,3})
print(s)
print(type(s))

s = {1,2,3,5,6,9,7,8,4} #ele ordena
print(s)
print(type(s))

s = {1,"b",True}
print(s)
print(type(s))

for valor in s:
    print(valor)

#Aplicação prática -> saber quais elementos unicos numa lista
cidades = ["Belo","Horizonte","Curitiba","Curitiba","São Paulo"]
print(set(cidades))

print(len(cidades))
print(len((set(cidades))))

#adição (mutáveis)
s = {1,2,3,4}
s.add(7)
print(s)

#delete
s.remove(3)
print(s)

s.discard(1)
print(s)

#deep copy
novo = s.copy()
novo.add(5)
print(novo)
print(s)

#shalow copy
novo = s
novo.add(15)
s.add(20)
print(novo)
print(s)

#limpar tudo
s.clear()
print(s)

#operações
s = {1,2,3,4}
print(sum(s))
print(min(s))
print(max(s))
print(len(s))

#----
#Metodos matemáticos
estudantes_python = {"Julia","Vanessa","Lucas"}
estudantes_java = {"Fernando","Vanessa","Lucas","Gustavo","Julia"}

#união
#.union()
unicos = estudantes_python.union(estudantes_java)
print(unicos)
unicos2 = estudantes_python | estudantes_java #caracter para união
print(unicos)

#intersecção
#.intersection
print("")
unicos3 = estudantes_python.intersection(estudantes_java)
print(unicos3)
unicos4 = estudantes_python & estudantes_java
print(unicos4)

#diferença
#.difference()
unicos5 = estudantes_python.difference(estudantes_java)
print(unicos5)
unicos6 = estudantes_java.difference(estudantes_python)
print(unicos6)