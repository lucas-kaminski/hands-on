function sandbox()
x = sym('x'); %declara e mapeia todo x
f = input('Insira f(x) = '); % a variável simbólica substitui string
xk = input('Insira o valor de xk = ');

exato = subs(f,xk);

fprintf("x(%f) = %f | %f \n",xk,exato, round(1.673,3,'significant'))
