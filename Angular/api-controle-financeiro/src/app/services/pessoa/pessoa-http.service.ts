import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Pessoa} from "../../model/pessoa";
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
    return this.http.post<Pessoa>(this.apiUrl, pessoa).pipe(
      catchError(this.handleError)
    );
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
