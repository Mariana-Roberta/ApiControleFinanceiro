import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, Location, NgIf} from "@angular/common";
import {Button} from "primeng/button";
import {TableModule} from "primeng/table";
import {Grupo} from "../../model/grupo";
import {GrupoFormService} from "../../services/grupo/grupo-form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LancamentoHttpService} from "../../services/lancamento/lancamento-http.service";
import {FieldsetModule} from "primeng/fieldset";
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-grupo-visualizacao',
  standalone: true,
  imports: [
    NgIf,
    Button,
    TableModule,
    DatePipe,
    CurrencyPipe,
    FieldsetModule,
    PanelModule
  ],
  templateUrl: './grupo-visualizacao.component.html',
  styleUrl: './grupo-visualizacao.component.css'
})
export class GrupoVisualizacaoComponent {

  grupo: Grupo = {
    id: 0,
    nome: '',
    descricao: '',
    saldo: 0,
    pessoa: undefined
  };

  constructor(private grupoFormService: GrupoFormService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {}

  ngOnInit() {
    // Obtém o id da pessoa da rota
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.grupoFormService.getGrupoById(Number(id)).subscribe(
          (dados: Grupo) => {
            this.grupo = dados;
          },
          (error) => {
            console.error('Erro ao carregar dados da pessoa', error);
          }
      );
    }
  }

  editarGrupo() {
    // Navega para a página de edição com o ID do grupo
    this.router.navigate(['/grupo/grupo-edit', this.grupo.id]);
  }

  verLancamentos() {
    this.router.navigate(['/lancamento/lancamento-listagem', this.grupo.id]);
  }

  novoLancamento() {
    this.router.navigate(['/lancamento/lancamento-formulario', this.grupo.id]);
  }

  verMetas() {
    this.router.navigate(['/meta/meta-listagem', this.grupo.id]);
  }

  novaMeta() {
    // Navega para a página de edição com o ID do grupo
    this.router.navigate(['/meta/meta-formulario', this.grupo.id]);
  }

  voltar() {
    this.location.back(); // Volta para a página anterior no histórico
  }

}
