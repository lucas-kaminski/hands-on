%Euler Método de Euler para EDOs
%       Euler(f,x0,y0,xN,N)
%       f = equação diferencial na forma y' = f(x,y)
%       x0,y0 na condição inicial y(x0)=y0
%       xN = último valor a ser aproximado
%       N total de passos a serem realizados

function Euler(f,x0,y0,xN,N)
syms x y
h=(xN-x0)/N;
fprintf('Passo utilizado h = %f\n',h)
resultado=zeros(N+1,2);
resultado(1,:)=[x0,y0];
for i=1:N
    y0=y0+h*eval(subs(f,{x,y},{x0,y0}));
    x0=x0+h;
    resultado(i+1,:)=[x0,y0];
end
disp('Solução obtida na forma (xn,yn)')
for i=1:N+1
    fprintf('(%.4f   ,   %.4f)\n',resultado(i,1),resultado(i,2))
end
plot(resultado(:,1),resultado(:,2),'*r-')
grid on