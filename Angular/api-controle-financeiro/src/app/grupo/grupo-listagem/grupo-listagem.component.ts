import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Router} from "@angular/router";
import {Grupo} from "../../model/grupo";
import {GrupoFormService} from "../../services/grupo/grupo-form.service";

@Component({
  selector: 'app-grupo-listagem',
  standalone: true,
  imports: [Button,
    PrimeTemplate,
    TableModule],
  templateUrl: './grupo-listagem.component.html',
  styleUrl: './grupo-listagem.component.css'
})
export class GrupoListagemComponent {
  gruposList: Grupo[] = [];

  constructor(private grupoFormService: GrupoFormService,
              private router: Router) {}

  ngOnInit() {
    this.grupoFormService.getGrupos().subscribe(
      (dados: Grupo[]) => {
        this.gruposList = dados;
      },
      (error) => {
        console.error('Erro ao carregar grupos', error);
      }
    );
  }

  editarGrupo(grupo: Grupo) {
    this.router.navigate(['/grupo/grupo-edit', grupo.id]);
  }

  verGrupo(grupo: Grupo) {
    this.router.navigate(['/grupo/grupo-visualizacao', grupo.id]);
  }

  novoGrupo(){
    this.router.navigate(['/grupo/grupo-form']);
  }

  viewMeta(){
      this.router.navigate(['/meta/meta-listagem']);
    }

  CriarLancamento(grupo: Grupo){
    this.router.navigate(['/lancamento/lancamento-formulario', grupo.id])
  }

}
