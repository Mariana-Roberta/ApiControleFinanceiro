import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Location, NgForOf} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {Pessoa} from "../../model/pessoa";
import {Grupo} from "../../model/grupo";
import { MessageService } from 'primeng/api';
import {ActivatedRoute, Router} from "@angular/router";
import {Lancamento} from "../../model/lancamento";
import {Categoria} from "../../model/categoria";
import {LancamentoHttpService} from "../../services/lancamento/lancamento-http.service";
import { Tipo } from '../../model/tipo';
import { GrupoFormService } from '../../services/grupo/grupo-form.service';

@Component({
  selector: 'app-lancamento-edit',
  standalone: true,
    imports: [
        Button,
        FormsModule,
        InputTextModule,
        NgForOf,
        PaginatorModule
    ],
    providers: [MessageService],
  templateUrl: './lancamento-edit.component.html',
  styleUrl: './lancamento-edit.component.css'
})
export class LancamentoEditComponent implements OnInit{

    errorMessage: string = '';

    lancamento: Lancamento = {
        id: 0,
        nome: '',
        descricao: '',
        data: '',
        tipo: Tipo.Receita,
        valor: 0,
        categoria: Categoria.Geral
    };

    grupo: Grupo = {
        id: 0,
        nome: '',
        descricao: '',
        saldo: 0,
        pessoa: undefined
    };

    tipos: { label: string; value: Tipo }[] = [];// Array de opções para o dropdown
    tipoSelecionada: Tipo | undefined; // Armazena a categoria selecionada
    categorias: { label: string; value: Categoria }[] = [];  // Array de opções para o dropdown
    categoriaSelecionada: Categoria | undefined;  // Armazena a categoria selecionada

    constructor(
        private lancamentoHttpService: LancamentoHttpService,
        private grupoFormService: GrupoFormService,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService,
        private location: Location
    ) {}

    ngOnInit() {
        // Obtém o id da pessoa da rota
        const id = this.route.snapshot.paramMap.get('id');
        const grupoid = this.route.snapshot.paramMap.get('grupoid');

        if (id) {
            this.grupoFormService.getGrupoById(Number(grupoid)).subscribe(
                (dados: Grupo) => {
                    this.grupo = dados;
                },
                (error) => {
                    console.error('Erro ao carregar dados do grupo', error);
                }
            );
        }

        if (id) {
            this.lancamentoHttpService.getLancamentoById(Number(id)).subscribe(
                (dados: Lancamento) => {
                    this.lancamento = dados;
                },
                (error) => {
                    console.error('Erro ao carregar dados do grupo', error);
                }
            );
        }

        this.categorias = Object.keys(Categoria).map(key => ({
            label: key,  // Exibe o nome do enum como label
            value: Categoria[key as keyof typeof Categoria]  // O valor deve ser o enum
        }));

        this.tipos = Object.keys(Tipo).map(key => ({
            label: key,  // Exibe o nome do enum como label
            value: Tipo[key as keyof typeof Tipo]  // O valor deve ser o enum
        }));
    }

    onSubmit() {
        this.editLancamento();
    }

    editLancamento() {
        if (this.categoriaSelecionada) {
            this.lancamento.categoria = this.categoriaSelecionada;
        }
        console.log(this.categoriaSelecionada);
        console.log(JSON.stringify(this.lancamento));
        
        if (this.tipoSelecionada) {
            this.lancamento.tipo = this.tipoSelecionada;
        }
        console.log(this.tipoSelecionada);
        console.log(JSON.stringify(this.lancamento));

        this.lancamentoHttpService.updateLancamento(this.lancamento)
            .subscribe({
                next: (value) => {
                    this.router.navigate(['lancamento/lancamento-listagem', this.grupo.id])
                }, error: (err) => {
                  this.errorMessage = err;
                  this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: this.errorMessage });
                }
            });
    }
    
    voltar() {
        this.location.back(); // Volta para a página anterior no histórico
    }
}
