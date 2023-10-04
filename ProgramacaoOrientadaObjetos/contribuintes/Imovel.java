public class Imovel {
  String endereco;
  String metragem;

  public Imovel(String end, String met){
    this.endereco = end;
    this.metragem = met;
  }

  public String getEndereco(){
    return this.endereco;
  }

  public String getMetragem() {
    return this.metragem;
  }
}
