import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, Location, NgIf, NgStyle} from "@angular/common";
import {Button} from "primeng/button";
import {TableModule} from "primeng/table";
import { Tipo } from '../../model/tipo';
import {Grupo} from "../../model/grupo";
import {GrupoFormService} from "../../services/grupo/grupo-form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LancamentoHttpService} from "../../services/lancamento/lancamento-http.service";
import {FieldsetModule} from "primeng/fieldset";
import { PanelModule } from 'primeng/panel';
import { Lancamento } from '../../model/lancamento';
import { Meta } from "../../model/meta";
import { MetaHttpService } from '../../services/meta/meta-http.service';

@Component({
  selector: 'app-grupo-visualizacao',
  standalone: true,
  imports: [
    NgIf,
    Button,
    TableModule,
    DatePipe,
    CurrencyPipe,
    NgStyle,
    FieldsetModule,
    PanelModule
  ],
  templateUrl: './grupo-visualizacao.component.html',
  styleUrl: './grupo-visualizacao.component.css'
})
export class GrupoVisualizacaoComponent {

  lancamentos: Lancamento[] = [];
  metas: Meta[] = [];
  tipo = Tipo;
  grupo: Grupo = {
    id: 0,
    nome: '',
    descricao: '',
    saldo: 0,
    pessoa: undefined
  };

  constructor(private grupoFormService: GrupoFormService,
              private lancamentoHttpService: LancamentoHttpService,
              private metaHttpService: MetaHttpService,
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
            this.carregarLancamentosByGrupo();
            this.carregarMetas()
          },
          (error) => {
            console.error('Erro ao carregar grupo', error);
          }
      );
  }
}

  carregarLancamentosByGrupo() {
    this.lancamentoHttpService.getLancamentosByGrupo(this.grupo.id).subscribe(
        (dados: Lancamento[]) => {
            this.lancamentos = dados;
        console.log(this.lancamentos);
        },
        (error) => {
            console.error('Erro ao carregar lançamentos', error);
        }
    );
  }
  carregarMetas(){
    this.metaHttpService.getMetasByGrupo(this.grupo.id).subscribe(
      (dados: Meta[]) => {
        this.metas = dados;
      },
    (error) => {
      console.error('Erro ao carregar metas', error);
     }
    )
  }

  editarGrupo() {
    // Navega para a página de edição com o ID do grupo
    this.router.navigate(['/grupo/grupo-edit', this.grupo.id]);
  }

  verLancamentos() {
    this.router.navigate(['/lancamento/lancamento-listagem', this.grupo.id]);
  }

  verLancamento(id: number){
    this.router.navigate(['/lancamento/lancamento-visualizacao', id])
  }

  novoLancamento() {
    this.router.navigate(['/lancamento/lancamento-formulario', this.grupo.id]);
  }

  verMetas() {
    this.router.navigate(['/meta/meta-list', this.grupo.id]);
  }

  novaMeta() {
    // Navega para a página de edição com o ID do grupo
    this.router.navigate(['/meta/meta-form', this.grupo.id]);
  }

  voltar() {
    this.location.back(); // Volta para a página anterior no histórico
  }

  voltarHome(){
    this.router.navigate(['/pessoa/pessoa-listagem']);
  }

}
