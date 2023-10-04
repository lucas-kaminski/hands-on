%Retorna o passo h e o número de subintervalos
%[h,N]=hN(f,k,a,b,p)
% h: passo
% N: numero de subintervalos
% f: função a ser integrada
% k: caso: 0-trapezio     1-1/3         2-3/8
% p: precisao
function[h,N]=hN()
x = sym('x');
f = x^(1/3);
a = 1;
b = 7;
k = 0;
p = 10^-6;
    if k==0
        fprintf('Regra do Trapézio\n')
        g=diff(f,3)
        R=[eval(solve(g));a;b]
        g=diff(f,2)
        F=abs(eval(subs(g,R)))
        M=max([F])
        h=(12*p/((b-a)*M))^0.5
    elseif k==1
        fprintf('Regra 1/3 de Simpson\n')
        g=diff(f,5)
        R=[eval(solve(g));a;b]
        g=diff(f,4)
        F=abs(eval(subs(g,R)))
        M=max([F])
        h=(180*p/((b-a)*M))^0.25
    elseif k==2
        fprintf('Regra 3/8 de Simpson\n')
        g=diff(f,5)
        R=[eval(solve(g));a;b]
        g=diff(f,4)
        F=abs(eval(subs(g,R)))
        M=max([F])
        h=(80*p/((b-a)*M))^0.25
    else
        fprintf('Opção Inválida\n')
        return
    end
    N=(b-a)/h