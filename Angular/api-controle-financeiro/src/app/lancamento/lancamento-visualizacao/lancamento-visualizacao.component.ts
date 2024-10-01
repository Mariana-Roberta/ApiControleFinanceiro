import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {CurrencyPipe, DatePipe, Location, NgIf} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Lancamento} from "../../model/lancamento";
import {GrupoHttpService} from "../../services/grupo/grupo-http.service";
import {LancamentoHttpService} from "../../services/lancamento/lancamento-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Grupo} from "../../model/grupo";
import {Categoria} from "../../model/categoria";
import {PanelModule} from "primeng/panel";

@Component({
  selector: 'app-lancamento-visualizacao',
  standalone: true,
    imports: [
        Button,
        CurrencyPipe,
        DatePipe,
        NgIf,
        PrimeTemplate,
        TableModule,
        PanelModule
    ],
  templateUrl: './lancamento-visualizacao.component.html',
  styleUrl: './lancamento-visualizacao.component.css'
})
export class LancamentoVisualizacaoComponent implements OnInit {

    lancamento: Lancamento = {
        id: 0,
        nome: '',
        descricao: '',
        data: '',
        tipo: '',
        valor: 0,
        categoria: Categoria.Geral
    };

    constructor(private lancamentoHttpService: LancamentoHttpService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.lancamentoHttpService.getLancamentoById(Number(id)).subscribe(
                (dados: Lancamento) => {
                    this.lancamento = dados;
                },
                (error) => {
                    console.error('Erro ao carregar dados do lançamento', error);
                }
            );
        }
    }

    editarLancamento() {
        // Navega para a página de edição com o ID do grupo
        this.router.navigate(['/lancamento/lancamento-edit', this.lancamento.id]);
    }

    voltar() {
        this.location.back(); // Volta para a página anterior no histórico
    }
}
