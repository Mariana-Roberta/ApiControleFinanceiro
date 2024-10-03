import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../../model/grupo';
import { Pessoa } from '../../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class GrupoFormService {
  private apiUrl = 'http://localhost:8080/grupo';  // Endpoint do controller Spring Boot

  constructor(private http: HttpClient) {}

  // Criar um novo grupo
  createGrupo(grupo: Grupo, pessoa: Pessoa): Observable<Grupo> {
    return this.http.post<Grupo>(`${this.apiUrl}/add/${pessoa.id}`, grupo);
  }

  // Obter todos os grupos
  getGrupos(pessoa: Pessoa): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(`${this.apiUrl}/${pessoa.id}`);
  }

  // Obter um grupo por ID
  getGrupoById(id: number): Observable<Grupo> {
    return this.http.get<Grupo>(`${this.apiUrl}/${id}`);
  }

  // Obter lista de grupo por pessoa
  getGruposByPessoaId(pessoaId: number): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(`${this.apiUrl}/pessoa/${pessoaId}`);
  }

  // Atualizar um grupo
  updateGrupo(grupo: Grupo): Observable<Grupo> {
    return this.http.put<Grupo>(`${this.apiUrl}/${grupo.id}`, grupo);
  }

  // Deletar um grupo (opcional)
  deleteGrupo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

