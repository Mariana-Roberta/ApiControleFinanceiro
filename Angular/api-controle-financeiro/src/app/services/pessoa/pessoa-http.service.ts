import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pessoa} from "../../models/pessoa";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PessoaHttpService {

  apiUrl: string = "http://localhost:8080/pessoa";

  constructor(private http: HttpClient) {
  }

  // Método para adicionar uma nova pessoa à lista
  addPesssoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  // Método para obter a lista de todas as pessoas
  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  // Método para obter uma pessoa pelo ID
  getPessoaById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar uma pessoa
  updatePessoa(pessoa: Pessoa): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${pessoa.id}`, pessoa);
  }
}
