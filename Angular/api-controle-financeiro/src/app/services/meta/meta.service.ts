import { Injectable } from '@angular/core';
import { Meta } from "../../model/meta";

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  metasList:  Meta[] = [];

  constructor() { }

  addMeta(meta : Meta){
    meta.id = this.metasList.length > 0 ? this.metasList.length + 1 : 1;
    console.log(meta);
    this.metasList.push(meta);

  }

  getMetas(): Meta[]{
    return this.metasList;
  }

  getById(id: number | null): Meta{
    return <Meta>this.metasList.find(meta => meta.id === id) 
  }



}
