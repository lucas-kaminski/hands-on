function secantes()

x = sym('x'); %declara e mapeia todo x
f = sin(x)^cos(x)-2*x^5*x %input('Insira f(x) = '); % a variável simbólica substitui string
xk_1 = 0.9% input('Insira o valor de x0 = ');
xk = 0%  input('Insira o valor de x1 = ');
e = 0.001% input('Insira a precisão desejada = ');
n = 100 %input('Numéro máximo de iterações = ');

k=1;

fprintf("x(0) = %f \n",xk_1)
fprintf("x(1) = %f \n",xk)  

while k<=n
    k=k+1;
    xk1=eval((xk_1*subs(f,xk)-xk*subs(f,xk_1))/(subs(f,xk)-subs(f,xk_1))); %Metodo das secantes
    erro = abs(xk1-xk)/max([1,abs(xk1)]); % para calcular hora erro percentual hora erro absoluto
    
    if erro < e
        fprintf("A raiz é x(%d) = %.4f ; erro = %.4f \n", k, xk1, erro)
        return
    end
    
    fprintf('x(%d) = %f ; erro = %f \n', k, xk1, erro)
    xk_1=xk;
    xk=xk1;
end