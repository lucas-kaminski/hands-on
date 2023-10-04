%Método de Gauss-Seidel
function gauss()
A = [1 2 6; 2 1 5; 6 3 1]
b=[4;3;-1]
e=10^-2
[m,n]=size(A);
if m~=n
    disp('A matriz deve ser quadrada')
    return
end
disp('A=')
disp(A)
disp('b=')
disp(b)
%Verificando os elementos da diagonal principal
for i=1:n
    if A(i,i)==0
        fprintf('Elemento A(%d,%d)=0 \n', i,i)
        disp('Elemento da diagonal principal não pode ser zero')
        return
    end
end

%Matriz A* e b*
b=b./diag(A); %dividi todos de B pela diagonal de A
A=A./diag(A); %faz a divisão pelos elementes correspondentes pela diagonal de A
disp('A*=')
disp(A)
disp('b*=')
disp(b)

%Analisando o critério de divergÊncia
%Criterio das linhas (aplicado em A*) <=> EDD (aplicado em A)
CS=false;
for i=1:n
    S=sum(abs(A(i,1:i-1)))+sum(abs(A(i,i+1:n)));
    if S >=1
        fprintf('Linha %d não é EDD\n', i)
        CS=true;
        break
    end
end
%Criterio de Sassenfeld
if CS
    disp('Testando o critério de Sassenfeld')
    beta(n)=0; %vetor nulo de n posições
    for i=1:n
        beta(i)=sum(abs(beta(1:i-1).*A(i,1:i-1)))+sum(abs(A(i,i+1:n)));
    if max(beta) >= 1
        fprintf('Linha %d não atende ao critério de Sassenfeld \n',i)
        fprintf('ConvergÊncia não garantida!')
        return
    end
    end
    disp('beta=')
    disp(beta)
else
    disp('A matriz A é EDD. Converência garantida!')
end

%Método de Gauss-Seidel
k=0;
erro=100;
x(n,1)=0;
disp('x(0)')
disp(x)

while k<100 &&  erro>e %&& conjunão (E)
    xant=x; %x anterior recebe o x atual
    for i=1:n
        x(i)=b(i)-A(i,1:i-1)*x(1:i-1)-A(i,i+1:n)*xant(i+1:n);
    end
    erro=max(abs(x-xant))/max(abs(x));
    k=k+1;
    fprintf('x(%d)=\n',k)
    disp(x)
    fprintf('Erro(%d)=%f\n',k,erro)
end

%jacobi(A,b,0.0001)
%A=[10,2,1;1,5,1;2,3,10]
%b=[7;-8;6]



    