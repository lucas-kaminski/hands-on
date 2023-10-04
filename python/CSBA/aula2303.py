class Estudante:
    def __init__(self, *listaDisc, **D):
        self.nome = D.pop('n','--')
        self.data =  D.pop('dt','--/--/----')
        self.matricula = D.pop("mt","--")
        self.endereco = D.pop('e','--')
        self.fone = D.pop('f','--') 
        self.curso_origem = D.pop('orig','--')
        self.listaDisc = []
        for x in listaDisc:
            self.listaDisc.append(x)

class Curso:
    def __init__(self, nu, no, esc,*Lis):
        self.num = nu 
        self.nome = no
        self.escola = esc
        self.Lis = []
        for x in Lis:
            self.Lis.append(x)

class Disciplina:
    def __init__(self, **Dic):
        self.nome = Dic.pop("n","--")
        self.responsavel = Dic.pop("r","--")
        self.cargaH = Dic.pop("c",0)
        self.periodo = Dic.pop("p",0)


Disciplina1 = Disciplina(n="CSBA",r='Computação',c=80,p=3)
print(Disciplina1.nome) 
Disciplina2 = Disciplina(n="IA",r='Computação',c=80,p=3)
print(Disciplina2.nome) 
c1 = Curso(1354,"EngComput","Politecnica",Disciplina2,Disciplina1)
print(c1.nome)
e1 = Estudante(Disciplina1, Disciplina2, n='Lucas',dt='29/12/2000',mt='8913',e='Rockfeller')
print(e1.nome)

for x in e1.listaDisc:
    print(x.nome)