%Polinomio Interpolador de Lagrange
function PnLagrange()
x=sym('x');

disp('Lucas Kaminski - Ex3 (por Lagrange)')

t=[0;3;5]
f=[2;9;1]

n=length(t);
Pn1=0;

if n~=length(f)
    disp('Quantidade de valores em x e y não confere!')
    return
end

for k=1:n
   Lk=1;
   for i=1:n
       if k~=i
           Lk=Lk*(x-t(i))/(t(k)-t(i));
       end
   end
   Pn1=Pn1+f(k)*Lk;
end

Pn1=simplify(Pn1)


