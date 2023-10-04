%Decomposição LU
% F=[2,2,3;3,3,1;0,3,4]
function decLU() 
A = [1 2 6; 2 1 5; 6 3 1]
b=[4;3;-1]
e=10^-2
format long
[m,n] = size(A); 
if m~=n %checa se é matriz quadrada
    disp('A matriz deve ser quadrado')
    return
end
%Menores principais
for k=1:n-1
    A(1:k,1:k); %determinante de k por k da matriz
    if abs(det(A(1:k,1:k)))<10^(-10) % para comparar de forma quase igual, não igual a zero
        fprintf('Menor principal A=%d = 0',k)
        return
    end
end
%Decomposição LU
for i=2:n %Varredura por linha
    for j=1:n
        if i<=j %Calcula U
            S=0; %poderia ser escrito em uma linha -> feito no 
            for k=1:i-1
                S=S+A(i,k)*A(k,j); 
            end
            for k=1:i-1
                S=S+A(i,k)*A(k,j); 
            end
            A(i,j)=A(i,j)-S;
        else %Calcula L
            S=0;
            for k=1:j-1
                S=S+A(i,k)*A(k,j);
            end
            A(i,j)=((A(i,j)-S)/A(j,j));
        end
    end
end
disp('Na parte estritamente inferior estão os elementos de L')
disp('Na parte estritamente diagonal e superior estão os elementos de U')
disp(A)
%Ly = b
for i=1:n
    S=0;
    for j=1:i-1
        S=S+A(i,j)*b(j);
    end
    b(i)=b(i)-S;
end
disp('Matriz y=')
disp(b)

%Retrosubstituição
b(n)=b(n)/A(n,n);
for i=n-1:-1:1
    S=0;
    for j=i+1:n
        S=S+A(i,j)*b(j);
    end
    b(i)=(b(i)-S)/A(i,i);
end
disp('A solução é:')
disp(b)
