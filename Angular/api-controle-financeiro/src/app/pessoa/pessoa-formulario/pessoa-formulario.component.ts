import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Pessoa} from "../../model/pessoa";
import { PessoaFormularioService } from '../../services/pessoa/pessoa-formulario.service'
import {Form, FormsModule} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-pessoa-formulario',
  standalone: true,
  imports: [
    FloatLabelModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './pessoa-formulario.component.html',
  styleUrl: './pessoa-formulario.component.css'
})
export class PessoaFormularioComponent {

  // Define o objeto pessoa com valores padrão
    pessoa: Pessoa = {
      id: 0,
      nome: 'Nome',
      email: '',
      cpf: '',
      telefone: ''
    }

    // Construtor do componente, onde injetamos o serviço e o router
    constructor(private _pessoaFormularioService: PessoaFormularioService,
                private _router: Router) {
    }

    // Método chamado quando o formulário é submetido
    onSubmit() {
      // Adiciona a pessoa usando o serviço
      this._pessoaFormularioService.addPesssoa(this.pessoa);
      this._router.navigate(['/pessoa/pessoa-listagem']);
    }

}
