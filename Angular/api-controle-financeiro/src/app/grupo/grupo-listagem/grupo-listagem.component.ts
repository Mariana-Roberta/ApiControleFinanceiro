import { Component } from '@angular/core';
import { GrupoFormService } from '../../services/grupo/grupo-form.service'
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {Pessoa} from "../../model/pessoa";
import {Pessoa} from "../../model/grupo";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-grupo-listagem',
  standalone: true,
  imports: [NgForOf, ButtonModule],
  templateUrl: './grupo-listagem.component.html',
  styleUrl: './grupo-listagem.component.css'
})
export class GrupoListagemComponent {
  gruposList: Grupo[] = this._grupoFormService.getGrupo();

  constructor(private _grupoFormService: GrupoFormService,
              private _router: Router) {
  }


  newGrupo(){
    this._router.navigate(['/grupo/grupo-form']);
  }

  viewMeta(){
      this._router.navigate(['/meta/meta-listagem']);
    }

  viewLancamento(){
    this._router.navigate(['/lancamento/lancamento-listagem'])
  }

}
