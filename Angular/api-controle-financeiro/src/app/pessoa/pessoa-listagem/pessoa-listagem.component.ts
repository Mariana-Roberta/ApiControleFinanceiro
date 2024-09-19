import { Component } from '@angular/core';
import { PessoaFormularioService } from '../../services/pessoa/pessoa-formulario.service'
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {Pessoa} from "../../model/pessoa";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-pessoa-listagem',
  standalone: true,
  imports: [NgForOf, ButtonModule],
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.css'
})
export class PessoaListagemComponent {

  pessoasList: Pessoa[] = this._pessoaFormularioService.getPessoas();

  constructor(private _pessoaFormularioService: PessoaFormularioService,
              private _router: Router) {
  }


  newPessoa(){
    this._router.navigate(['/pessoa/pessoa-formulario']);
  }

  /*ngOnInit(): void {
    pessoasList = this._pessoaFormularioService.getPessoas();
  }*/
}
