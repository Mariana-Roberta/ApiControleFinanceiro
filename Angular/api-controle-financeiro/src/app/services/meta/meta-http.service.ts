import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Meta } from "../../model/meta";
import { Observable } from "rxjs";





@Injectable({
  providedIn: "root"
})
export class MetaHttpService{

  apiUrl: string = "http://localhost:8080/meta";

  constructor(private http: HttpClient){

  }

  addMeta(meta: Meta): Observable<Meta>{
    return this.http.post<Meta>(this.apiUrl, meta)
  }

  getMeta(): Observable<Meta[]>{
    return this.http.get<Meta[]>(this.apiUrl)
  }

  getMetaById(id: number){
    return this.http.get<Meta>(`${this.apiUrl}/${id}`)
  }

  updateMeta(meta : Meta): Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/${meta.id}`, meta);
  }

}