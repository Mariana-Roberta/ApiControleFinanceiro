import { Injectable } from '@angular/core';
import {Pessoa} from "../../model/pessoa";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PessoaHttpService {

  apiUrl: string = "http://localhost:8080/pessoa";

  constructor(private http: HttpClient) {
  }

  // Método para adicionar uma nova pessoa à lista
  addPesssoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.apiUrl}/save`, pessoa).pipe(
      catchError(this.handleError)
    );
  }

  // Método para obter a lista de todas as pessoas
  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.apiUrl}/findAll`);
  }

  // Método para obter uma pessoa pelo ID
  getPessoaById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/findById/${id}`);
  }

  // Método para atualizar uma pessoa
  updatePessoa(pessoa: Pessoa): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update/${pessoa.id}`, pessoa);
  }

  // Método para deletar uma pessoa
  deletePessoa(pessoa: Pessoa): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${pessoa.id}`);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido.';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = error.error.message; // A mensagem do Spring Boot será recebida aqui
    }
    return throwError(() => errorMessage);
  }
}
