export  interface Grupo {
  Integer id;
  String nome;
  String descricao;
  BigDecimal saldo = BigDecimal.ZERO;
  Pessoa pessoa;
}
