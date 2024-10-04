import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "../../model/pessoa";
import {Relatorio} from "../../model/relatorio";

@Injectable({
  providedIn: 'root'
})
export class RelatorioHttpService {

  apiUrl: string = "http://localhost:8080/relatorio";

  constructor(private http: HttpClient) {
  }

  gerarRelatorioMensal(mes: number, ano: number): Observable<Relatorio[]> {
    return this.http.get<Relatorio[]>(`${this.apiUrl}/mensal/${mes}/${ano}`);
  }

  gerarRelatorioPorGrupo(grupoId: number): Observable<Relatorio[]> {
    return this.http.get<Relatorio[]>(`${this.apiUrl}/grupo/${grupoId}`);
  }

  gerarRelatorioPorCategoria(categoria: string): Observable<Relatorio[]> {
    return this.http.get<Relatorio[]>(`${this.apiUrl}/categoria/${categoria}`);
  }
}
