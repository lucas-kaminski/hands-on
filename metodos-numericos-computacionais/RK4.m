function RK4()
y = sym('y');
x = sym('x');

f = (10*x+y)/10*y+x+1;
x0 = 0;
y0 = 6;
xN = 1;
N = 1;
h=(9+9+1)/100;

fprintf('h = %f\n',h)

resultado=zeros(N+1,2);
resultado(1,:)=[x0,y0];

for i=1:N
    subs(f,{x,y},{x0,y0})
    K1=round(eval(subs(f,{x,y},{x0,y0})),4)
    K2=round(eval(subs(f,{x,y},{x0+h/2,y0+h*K1/2})),4)
    K3=round(eval(subs(f,{x,y},{x0+h/2,y0+h*K2/2})),4)
    K4=round(eval(subs(f,{x,y},{x0+h,y0+h*K3})),4)
    y0=round((y0+h*(K1+2*K2+2*K3+K4)/6),4);
    x0=x0+h;
    xN=xN-h;
    resultado(i+1,:)=[x0,y0];
end

disp('Solução obtida na forma (xn,yn) | Solução analitica (xb,yn) ')
for i=1:N+1
    fprintf('(%.5f   ,   %.5f)\n',resultado(i,1),resultado(i,2))
end

plot(resultado(:,1),resultado(:,2),'*r-')
title('Vermelho - Numérica | Azul - Analitica')
xlabel('Tempo')
ylabel('Velocidade')
grid on