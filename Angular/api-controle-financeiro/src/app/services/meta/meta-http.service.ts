import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Meta } from "../../model/meta";
import { catchError, Observable, throwError } from "rxjs";
import { Grupo } from "../../model/grupo";
import { group } from "console";





@Injectable({
  providedIn: "root"
})
export class MetaHttpService{

  apiUrl: string = "http://localhost:8080/meta";

  constructor(private http: HttpClient){

  }

  addMeta(meta: Meta, grupo: Grupo): Observable<Meta>{
    return this.http.post<Meta>(`${this.apiUrl}/save/${grupo.id}`, meta).pipe(catchError(this.handleError))
  }

  getMeta(): Observable<Meta[]>{
    return this.http.get<Meta[]>(`${this.apiUrl}/findAll`)
  }

  getMetaById(id: number){
    return this.http.get<Meta>(`${this.apiUrl}/findById/${id}`)
  }

  getMetasByGrupo(grupoId: number): Observable<Meta[]> {
    return this.http.get<Meta[]>(`${this.apiUrl}/grupo/${grupoId}`);
  }

  updateMeta(meta : Meta): Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/update/${meta.id}`, meta);
  }

  deleteMeta(meta: Meta): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${meta.id}`);
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