import { Injectable } from '@angular/core';
import { Grupo } from "../../model/grupo";

@Injectable({
  providedIn: 'root'
})
export class GrupoFormService {
  gruposList: Grupo[] = [];

    constructor() { }

    // Método para adicionar uma nova pessoa à lista
    addGrupo(grupo: Grupo) {
      // Define um ID para a nova pessoa baseado no tamanho da lista
      grupo.id = this.grupossList.length > 0 ? this.gruposList.length + 1 : 1;
      console.log(grupo);
      this.gruposList.push(grupo); // Adiciona a pessoa à lista
    }

    // Método para obter a lista de todas as pessoas
    getGrupos(): Grupo[] {
      return this.gruposList; // Retorna a lista de pessoas
    }

    // Método para obter uma pessoa pelo ID
    getById(id: number | null): Grupo {
      // Busca a pessoa na lista pelo ID e retorna
      return <Grupo>this.gruposList.find(grupo => grupo.id === id);
    }
}
