import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../../model/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoFormService {
  private apiUrl = 'http://localhost:8080/grupo';  // Endpoint do controller Spring Boot

  constructor(private http: HttpClient) {}

  // Criar um novo grupo
  createGrupo(grupo: Grupo): Observable<Grupo> {
    return this.http.post<Grupo>(this.apiUrl, grupo);
  }

  // Obter todos os grupos (caso seja necessário)
  getGrupos(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.apiUrl);
  }

  // Obter um grupo por ID (opcional)
  getGrupoById(id: number): Observable<Grupo> {
    return this.http.get<Grupo>(`${this.apiUrl}/${id}`);
  }

  // Atualizar um grupo (opcional)
  updateGrupo(id: number, grupo: Grupo): Observable<Grupo> {
    return this.http.put<Grupo>(`${this.apiUrl}/${id}`, grupo);
  }

  // Deletar um grupo (opcional)
  deleteGrupo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

