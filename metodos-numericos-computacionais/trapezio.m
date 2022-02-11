%Regra do Trapezio
function [I]=trapezio()
x = sym('x');

fprintf('Lucas Kaminski - Ex. 4 (por regra do trapézio) \n')

f = sin(x)
a = 0
b = 8
n = 6

h=(b-a)/n;
I=eval(round(subs(f,a),4)+eval(round(subs(f,b),4)));

for i=1:n-1
    I=I+2*eval(round(subs(f,a+i*h),4));
    fprintf('Resultado da subs %.4f = %f\n',a+i*h,round(subs(f,a+i*h),4));
end

I=I*h/2;

disp('A aproximação da integral da função')
fprintf('de %.0f até %.0f com %d subintervalos é:\n %.10f \n',a,b,n,I)