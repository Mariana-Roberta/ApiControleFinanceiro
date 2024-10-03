import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lancamento} from "../../model/lancamento";
import {Grupo} from "../../model/grupo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LancamentoHttpService {
  apiUrl: string = "http://localhost:8080/lancamento";

  constructor(private http: HttpClient) {
  }

// Método para adicionar um novo lançamento ao grupo
  addLancamento(lancamento: Lancamento, grupo: Grupo): Observable<Lancamento> {
    return this.http.post<Lancamento>(`${this.apiUrl}/add/grupo/${grupo.id}`, lancamento);
  }

// Método para obter a lista de todos os lançamentos de um grupo
  getLancamentosByGrupo(grupoId: number): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(`${this.apiUrl}/grupo/${grupoId}`);
  }

  // Método para obter a lista de todos os lançamentos
  getLancamentos(): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(`${this.apiUrl}/listagem`);
  }

// Método para obter um lançamento pelo ID
  getLancamentoById(id: number): Observable<Lancamento> {
    return this.http.get<Lancamento>(`${this.apiUrl}/${id}`);
  }

// Método para atualizar um lançamento
  updateLancamento(lancamento: Lancamento): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${lancamento.id}`, lancamento);
  }

// Método para remover um lançamento
  deleteLancamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
