%Polinomio Interpolador de Newton
function PnNewton()
x=sym('x');

t=[1;2;3]
f=[6;9;5]

if length(t)~=length(f)
    disp('Quantidade de valores em x e y não confere!')
    return
end
n=length(t);
%Diferenças divididas
DifDiv=f;
for k=1:n-1
    for i=n:-1:k+1
        DifDiv(i)=(DifDiv(i)-DifDiv(i-1))/(t(i)-t(i-k));
    end
end
disp('Diferenças Divididas Utilizadas no polinômio')
disp('da menor para maior ordem')
disp(DifDiv)
%PnNewton
Pn=DifDiv(1);
for i=2:n
   Prod=1;
   for j=1:i-1
      Prod=Prod*(x-t(j));
   end
   Pn=Pn+Prod*DifDiv(i);
end
Pn=simplify(Pn);
fprintf('Pn_%d(x)=%s\n',n-1,Pn)
subs(Pn,2.5)
%Gráfico
eixox=linspace(t(1)-1,t(n)+1); %linspace(a,b) cria 100 valores entre a e b
eixoy=subs(Pn,eixox);
plot(t,f,'m^',eixox,eixoy,'b-') %cor,formato tipo_de_linha
title('Pn(x)')
xlabel('x')
ylabel('y')
grid on

