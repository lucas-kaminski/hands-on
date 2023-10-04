function newton()
x = sym('x');

f = 10*sin(x)+8*log(x^2)
xk = 1;
e = 10^(-1);
n = 1000;

fd = diff(f) %deriva a função -> diff(f, n)n

k=0;

fprintf("x(%d) = %f \n",k,xk)

while k<n
    k=k+1
    
    if subs(fd,xk) == 0
       disp('A derivada não pode ser zero. Use outro valor inicial')
       return
    end
    
    %xk12=xk-subs(f,xk)/subs(fd,xk) % método de newton -> dessa forma
    % altera texto em texto e produz um erro de processamento
    subs(fd,xk)
    xk1=eval(xk-subs(f,xk)/subs(fd,xk)) %o eval calcula e retorna o valor, ao inves de retornar a função
    erro = abs(xk1-xk)/max([1,abs(xk1)]) % para calcular hora erro percentual hora erro absolu
    
    fprintf('x(%.2f) = %.10f ; erro = %.10f \n', xk, xk1, erro) 
    
    xk=xk1;
        
    if erro < e
        fprintf("A raiz é x(%d) = %.10f ; erro = %.10f \n", k, xk1, erro)
        return
    end
end



