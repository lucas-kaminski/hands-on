%RK2 Método de Runge-Kutta de 2ª para EDOs
%       RK2(f,x0,y0,xN,N)
%       f = equação diferencial na forma y' = f(x,y)
%       x0,y0 na condição inicial y(x0)=y0
%       xN = último valor a ser aproximado
%       N total de passos a serem realizados

function RK2(f,x0,y0,xN,N)
syms x y
h=(xN-x0)/N;
fprintf('Passo utilizado h = %f\n',h)
resultado=zeros(N+1,2);
resultado(1,:)=[x0,y0];
for i=1:N
    K1=round(eval(subs(f,{x,y},{x0,y0})),4);
    K2=round(eval(subs(f,{x,y},{x0+h/2,y0+h*K1/2})),4);
    y0=round((y0+h*K2),4);
    x0=x0+h;
    resultado(i+1,:)=[x0,y0];
end
disp('Solução obtida na forma (xn,yn)')
for i=1:N+1
    fprintf('(%.10f   ,   %.10f)\n',resultado(i,1),resultado(i,2))
end
plot(resultado(:,1),resultado(:,2),'*r-')
grid on