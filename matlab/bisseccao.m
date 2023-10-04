%Método da Bissecção
%(x+1)^2*exp(x^2-2)

function bisseccao();
x = sym('x'); %declara e mapeia todo x
f = 6*x^5-21*x-6 %input('Insira f(x) = ');
a = 1 %input('Insira o valor de a = ');
b = 2 %input('Insira o valor de b = ');
c = 4 %input('Insira a quantidade de casas decimais = ');
e = 10^-2%('Insira a precisão desejada = ');
n = 100%('Numéro máximo de iterações = ');


if subs(f,a)*subs(f,b) > 0 
    disp('O intervalo não converge!')
    fprintf('f(%i) = %f \n', a, subs(f,a)) % % -> resultado em float
    fprintf('f(%i) = %f \n' , b, subs(f,b))
    return
end

k=1;
while k <= n
    xk = round((a+b)/2,c);
    fprintf("x(%i) = %f \n",k, xk)
    if subs(f,a)*subs(f,xk) < 0
        b=xk;
    else
        a=xk;
    end
    k = k + 1;
    xk1 = (a+b)/2;
    fprintf("erro %.4f \n",e*max([1,abs(xk1)]))
    if abs(xk1-xk) < e*max([1,abs(xk1)])
        fprintf("A raiz é x(%d) = %f \n",k,xk1)
        return
    end
end