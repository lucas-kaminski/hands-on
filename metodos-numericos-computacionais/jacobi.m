%Método de Jacobi-Richardson
function jacobi()

disp('Lucas Kaminski - Ex 2 (Por Jacobi-Richardson)')

A = [-1 0 0 sqrt(2)/2 1 0 0 0; 
     0 -1 0 sqrt(2)/2 0 0 0 0;
     0 0 -1 0 0 0 1/2 0;
     0 0 0 -sqrt(2)/2 0 -1 -1/2 0;
     0 0 0 0 -1 0 0 1;
     0 0 0 0 0 1 0 0;
     0 0 0 -sqrt(2)/2 0 0 sqrt(3)/2 0;
     0 0 0 0 0 0 -sqrt(3)/2 -1];

b=[0;0;0;0;0;10000;0;0];
e=10^-8;

[m,n]=size(A);  %(linhas,colunas)=size(A)
if m~=n         %diferente: ~=
    disp('O sistema deve ser quadrado')
    return
end
% disp('A=')
% disp(A)
% disp('b=')
% disp(b)
%verificando os elementos da diagonal principal
for i=1:n
    if abs(A(i,i))<10^(-10)
        fprintf('Elemento A(%d,%d)=0\n',i,i)
        disp('Elemento da diagoanl pricipal não pode ser zero')
        return
    end
end
%Matriz A* e b*
b=b./diag(A);   %diag(A): vetor com os elementos da diagonal de A
A=A./diag(A);   % ./ faz a divisão dos elementos correspondentes
%disp('A*=')
%disp(A)
%disp('b*=')
%disp(b)
%EDD
NC=false;        %Variavel lógica para controlar a norma coluna
for i=i:n
    S=sum(abs(A(i,1:i-1)))+sum(abs(A(i,i+1:n)));
    if S>=1
        fprintf('Linha %d não é EDD\n',1)
        NC=true;
    end
end
%Norma coluna
if NC
    disp('Testando a norma coluna')
    A=A';   %transposta da matriz A*
    for i=i:n
        S=sum(abs(A(i,1:i-1)))+sum(abs(A(i,i+1:n)));
        if S>=1
            fprintf('Colunaa %d não atende a norma coluna\n',1)
            return
        end
    end
    A=A'
    disp('Norma coluna foi verificada. Convergência garantida.')
else
    disp('A matriz A é EDD. COnvergência garantida.')
end
%Método de Jacobi-RIchardson
k=0;
erro=100;
x=b;
disp('x(0)')
disp(x)
while k<100 && erro>e   %&& conjunção E
    xant=x;     %x anterior recebe o x atual
    for i=1:n
        x(i)=b(i)-A(i,1:i-1)*xant(1:i-1)-A(i,i+1:n)*xant(i+1:n);
    end
    erro=max(abs(x-xant))/max(abs(x));
    k=k+1;
    fprintf('x(%d)=\n',k)
    disp(x)
    fprintf('Erro (%d)=%f\n',k,erro)
end

fprintf('\n \nF1 | F2 | F3 | f1 | f2 | f3 | f4 | f5 \n');
fprintf('%.2f | %.2f | %.2f | %.2f | %.2f | %.2f | %.2f | %.2f \n', x(1), x(2), x(3), x(4), x(5), x(6), x(7), x(8))