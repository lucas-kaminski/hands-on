%Regras de Simpson
function [I]=simpson()
x = sym('x');

f = x*2.71828^x
a = 0
b = 8
n = 6


if n==1
    trapezio(f,a,b,n);
elseif rem(n,2)==0     % n é par
    fprintf('Será calculador pela regra 1/3 de Simpson\n')
    h=(b-a)/n
    I=eval(round(subs(f,a),4))+eval(round(subs(f,b),4));
    for i=1:n-1
        if rem(i,2)==0
            round(subs(f,a+i*h),4)
            I=I+2*eval(round(subs(f,a+i*h),4));
        else
            round(subs(f,a+i*h),4)
            I=I+4*eval(round(subs(f,a+i*h),4));
        end
    end
    I=I*h/3;
    fprintf('A aproximação da integral da função %s\n',f)
    fprintf('de %.4f até %.4f com %d subintervalos é \n%.20f\n',a,b,n,I)
elseif rem(n,3)==0     %n é multiplo de 3
    fprintf('Será calculador pela regra 3/8 de Simpson\n')
    h=(b-a)/n;
    I=eval(round(subs(f,a),4))+eval(round(subs(f,b),4));
    for i=1:n-1
        if rem(i,3)==0
            I=I+2*eval(round(subs(f,a+i*h),4));
        else
            I=I+3*eval(round(subs(f,a+i*h),4));
        end
    end
    I=I*3*h/8;
    fprintf('A aproximação da integral da função %s\n',f)
    fprintf('de %.4f até %.4f com %d subintervalos é \n%.20f\n',a,b,n,I)
else   % outros casos (misto)
    fprintf('Regra Mista\n')
    h=(b-a)/n;
    I1=simpson(f,a,a+(n-3)*h,n-3);
    I2=simpson(f,a+(n-3)*h,b,3);
    I=I1+I2;
    fprintf('A aproximação da integral da função %s\n',f)
    fprintf('de %.4f até %.4f com %d subintervalos é \n%.20f\n',a,b,n,I)
end