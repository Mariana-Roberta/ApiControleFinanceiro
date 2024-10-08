import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import { Location, CurrencyPipe, NgIf, NgStyle } from '@angular/common';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {ActivatedRoute, Router} from "@angular/router";
import {Lancamento} from "../../model/lancamento";
import {LancamentoHttpService} from "../../services/lancamento/lancamento-http.service";
import {Grupo} from "../../model/grupo";
import { PanelModule } from 'primeng/panel';
import {GrupoFormService} from "../../services/grupo/grupo-form.service";

@Component({
  selector: 'app-lancamento-listagem',
  standalone: true,
    imports: [
        PanelModule,
        CurrencyPipe,
        NgStyle,
        NgIf,
        Button,
        PrimeTemplate,
        TableModule
    ],
  templateUrl: './lancamento-listagem.component.html',
  styleUrl: './lancamento-listagem.component.css'
})
export class LancamentoListagemComponent implements OnInit {

    lancamentos: Lancamento[] = []; // Lista de grupos a ser exibida

    grupo: Grupo = {
        id: 0,
        nome: '',
        descricao: '',
        saldo: 0,
        pessoa: undefined
    };

    constructor(private lancamentoHttpService: LancamentoHttpService,
                private grupoFormService: GrupoFormService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.grupoFormService.getGrupoById(Number(id)).subscribe(
                (dados: Grupo) => {
                    this.grupo = dados;
                    this.carregarLancamentosByGrupo();
                },
                (error) => {
                    console.error('Erro ao carregar dados do grupo', error);
                }
            );
        } else {
            this.carregarLancamentos();
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

    carregarLancamentos() {
        this.lancamentoHttpService.getLancamentos().subscribe(
            (dados: Lancamento[]) => {
                this.lancamentos = dados;
            },
            (error) => {
                console.error('Erro ao carregar lançamentos', error);
            }
        );
    }

    editarLancamento(lancamentoId: number, grupo: Grupo) {
        this.router.navigate(['/lancamento/lancamento-edit/edit', lancamentoId, grupo.id]);
    }
    

    novoLancamento(grupoId: number){
        this.router.navigate(['/lancamento/lancamento-formulario', grupoId])
    }

    verLancamento(lancamentoId: number) {
        this.router.navigate(['/lancamento/lancamento-visualizacao', lancamentoId]);
    }

    voltar() {
        this.location.back(); // Volta para a página anterior no histórico
    }
}
