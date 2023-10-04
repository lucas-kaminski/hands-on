import java.util.ArrayList;

public class Contribuinte {
  private String nome;
  private ArrayList<Dependente> dep = new ArrayList<Dependente>();
  private ArrayList<Imovel> imo = new ArrayList<Imovel>();

  public Contribuinte(String nome) {
    this.nome = nome;
  }

  public String getNome() {
    return nome;
  }

  public void incluiDep(String nome, int idade) {
    Dependente d = new Dependente(nome, idade);
    dep.add(d);
  }

  public void incluiImovel(String endereco, String metragem) {
    Imovel imovel = new Imovel(endereco, endereco);
    imo.add(imovel);
  }

  public void imprimeImo() {
    if (imo.size() == 0) {
      System.out.print("Imóveis de " + nome);
      System.out.println(": nenhum cadastrado.");
    } else {
      System.out.print("Imóveis de " + nome);
      System.out.println(" (" + imo.size() + "):");
      for (Imovel d : imo) { // d é um iterador.
        System.out.print("- " + d.getEndereco() + ", ");
        System.out.println(d.getMetragem() + " metros quadrados.");
      }
    }
  }

  public void imprimeDep() {
    if (dep.size() == 0) {
      System.out.print("Dependentes de " + nome);
      System.out.println(": nenhum cadastrado.");
    } else {
      System.out.print("Dependentes de " + nome);
      System.out.println(" (" + dep.size() + "):");
      for (Dependente d : dep) { // d é um iterador.
        System.out.print("- " + d.getNome() + ", ");
        System.out.println(d.getIdade() + " anos.");
      }
    }
  }
}