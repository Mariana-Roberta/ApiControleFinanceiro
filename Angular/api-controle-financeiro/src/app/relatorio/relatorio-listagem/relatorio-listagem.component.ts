import {Component, OnInit} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {Button} from "primeng/button";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {TableModule} from "primeng/table";
import {TabViewModule} from "primeng/tabview";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {RelatorioHttpService} from "../../services/relatorio/relatorio-http.service";
import {Relatorio} from "../../model/relatorio";
import {GrupoHttpService} from "../../services/grupo/grupo-http.service";
import {Grupo} from "../../model/grupo";
import {Categoria} from "../../model/categoria";

@Component({
  selector: 'app-relatorio-listagem',
  standalone: true,
  imports: [
    PanelModule,
    Button,
    NgIf,
    TableModule,
    TabViewModule,
    RadioButtonModule,
    NgForOf,
    FormsModule,
    DatePipe
  ],
  templateUrl: './relatorio-listagem.component.html',
  styleUrl: './relatorio-listagem.component.css'
})
export class RelatorioListagemComponent implements OnInit {

  grupos: Grupo[] = [];

  relatoriosPorGrupo: { [key: number]: Relatorio[] } = {};
  relatoriosPorCategoria: { [key: string]: Relatorio[] } = {}; // Para armazenar relatórios por categoria
  relatoriosMensais: Relatorio[] = [];

  categorias: string[] = Object.values(Categoria); // Obtendo as categorias do enum

  constructor(private relatorioService: RelatorioHttpService,
              private grupoService: GrupoHttpService) {
  }

  ngOnInit() {
    this.grupoService.getGrupos().subscribe(
        (dados: Grupo[]) => {
          this.grupos = dados;
        },
        (error) => {
          console.error(`Erro ao encontrar os grupos.`, error);
        }
    );
  }



  gerarRelatorioPorGrupo() {
    this.relatoriosPorGrupo = {}; // Limpa os relatórios anteriores

    this.grupos.forEach(grupo => {
      this.relatorioService.gerarRelatorioPorGrupo(grupo.id).subscribe(
          (dados: Relatorio[]) => {
            this.relatoriosPorGrupo[grupo.id] = dados; // Armazena relatórios por ID do grupo
            console.log(`Relatório para o grupo ${grupo.id} gerado:`, this.relatoriosPorGrupo[grupo.id]);
          },
          (error) => {
            console.error(`Erro ao gerar relatório para o grupo ${grupo.id}`, error);
          }
      );
    });
  }

  gerarRelatorioPorCategoria() {
    this.categorias.forEach(categoria => {
      this.relatorioService.gerarRelatorioPorCategoria(categoria).subscribe(
          (dados: Relatorio[]) => {
            this.relatoriosPorCategoria[categoria] = dados;
            console.log(`Relatório para a categoria ${categoria} gerado:`, this.relatoriosPorCategoria[categoria]);
          },
          (error) => {
            console.error(`Erro ao gerar relatório para a categoria ${categoria}`, error);
          }
      );
    });
  }

}
