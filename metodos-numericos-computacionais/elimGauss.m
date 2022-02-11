function elimGauss()
A = [1 2 6; 2 1 5; 6 3 1]
b=[4;3;-1]
e=10^-2
[m,n] = size(A);
if m~=n
    disp('A matriz deve ser quadrado')
    fprinf('%d linhas(s) x %d colunas()',m,n)
    return
end

%eliminação de gauss
format rat %(fração)
for k=1:n-1
    if A(k,k) == 0
        fprinf("Pivô A(%d,%d) nulo", k,k)
        return
    end
    
    for i=k+1:n
        p=A(i,k)/A(k,k);
        for j=k:n
            A(i,j)=A(i,j)-A(k,j)*p;
            
        end
        b(i)=b(i)-b(k)*p;
        fprintf("k %i i %i j %i %f \n",k,i,j,b(i))
    end
    fprintf("Etapa %d do escalonamento",k)
    A
    b
end
%Retrosubstituição
x(n)=b(n)/A(n,n);
for i=n-1:-1:1
    S=0;
    for j=i+1:n
        S=S+A(i,j)*x(j);
    end
    x(i)=(b(i)-S)/A(i,i);
end
disp('A solução é:')
x=x.' %transposta
format long
x
format short %decimais
