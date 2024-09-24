import { Injectable } from '@angular/core';
import {Pessoa} from "../../models/pessoa";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  // Lista para armazenar objetos do tipo Pessoa
  pessoasList: Pessoa[] = [];

  constructor() { }

  // Método para adicionar uma nova pessoa à lista
  addPesssoa(pessoa: Pessoa) {
    // Define um ID para a nova pessoa baseado no tamanho da lista
    pessoa.id = this.pessoasList.length > 0 ? this.pessoasList.length + 1 : 1;
    console.log(pessoa);
    this.pessoasList.push(pessoa); // Adiciona a pessoa à lista
  }

  // Método para obter a lista de todas as pessoas
  getPessoas(): Pessoa[] {
    return this.pessoasList; // Retorna a lista de pessoas
  }

  // Método para obter uma pessoa pelo ID
  getById(id: number | null): Pessoa {
    // Busca a pessoa na lista pelo ID e retorna
    return <Pessoa>this.pessoasList.find(pessoa => pessoa.id === id);
  }
}
