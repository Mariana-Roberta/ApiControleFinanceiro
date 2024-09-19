import { Pessoa } from "./pessoa";

export  interface Grupo {
  id: number;
  nome: string,
  descricao: string,
  saldo: number,
  pessoa: Pessoa | undefined
}
