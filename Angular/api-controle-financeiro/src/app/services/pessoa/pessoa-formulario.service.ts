import { Injectable } from '@angular/core';
import {Pessoa} from "../model/form";

@Injectable({
  providedIn: 'root'
})
export class PessoaFormularioService {

  pessoasForm: Pessoa[] = [];

    constructor() { }

    addPesssoa(form: Pessoa) {
      form.id = this.pessoasForm.length > 0 ? this.pessoasForm.length + 1 : 1;
      console.log(form);
      this.pessoasForm.push(form);
    }

    getPessoas(): Pessoa[] {
      return this.pessoasForm;
    }

    getById(id: number | null): Pessoa {
      return <Pessoa>this.pessoasForm.find(pessoa => pessoa.id === id);
    }
}
