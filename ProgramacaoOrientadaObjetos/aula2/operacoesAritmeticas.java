public class operacoesAritmeticas {
  public static void main(String[] args) {
    int a = 5, b = 7, c = 3;
    System.out.println(a + "+" + b + "=" + (a + b));
    System.out.println(a + "-" + b + "=" + (a - b));
    System.out.println(a + "*" + b + "=" + (a * b));
    System.out.println(a + "/" + b + "=" + (a / b));
    System.out.println(a + "%" + b + "=" + (a % b));

    System.out.println(a + "+" + b + "*" + c + "=" + (a + b * c));
    System.out.println("(" + a + "+" + b + ")*" + c + "=" + ((a + b) * c));
    System.out.println(a + "+" + "1.0" + b + "/" + c + "=" + (a + 1.0 * b / c));
    System.out.println(a + "*" + b + "/" + c + "=" + (a * b / c));
    System.out.println("+" + b + "/" + c + "=" + (+b / c));
    System.out.println("1.0 * " + b + "/" + c + "=" + (1.0 * b / c));
    System.out.println(b + "%" + a + "=" + (b % a));
  }
}