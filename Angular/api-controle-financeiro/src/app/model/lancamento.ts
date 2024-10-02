import {Categoria} from "./categoria";

export  interface Lancamento {
  id: number,
  nome: string,
  descricao: string,
  data: string,
  tipo: string,
  valor: number,
  categoria: string
}
