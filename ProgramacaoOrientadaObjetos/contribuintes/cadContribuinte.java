import java.util.ArrayList;

public class cadContribuinte {
  public static void main(String[] args) {
    ArrayList<Contribuinte> cont = new ArrayList<Contribuinte>();
    // Contribuinte 0.
    Contribuinte c0 = new Contribuinte("Pedro de Lara");
    cont.add(c0);
    System.out.println("Cadastrado: " + c0.getNome());
    c0.incluiDep("Maria de Lara", 13);
    c0.incluiDep("Jose de Lara", 15);
    c0.imprimeDep();
    c0.incluiImovel("rua teste", "10 Bloco 01");
    c0.imprimeImo();
    // Contribuinte 1.
    Contribuinte c1 = new Contribuinte("Maria Cardoso");
    cont.add(c1);
    System.out.println("Cadastrado: " + c1.getNome());
    c1.incluiDep("Pedro Cardoso", 11);
    c1.imprimeDep();
    c1.imprimeImo();
    // Contribuinte 2.
    Contribuinte c2 = new Contribuinte("Roberto Oliveira");
    cont.add(c2);
    System.out.println("Cadastrado: " + c2.getNome());
    c2.imprimeDep();
  }
}