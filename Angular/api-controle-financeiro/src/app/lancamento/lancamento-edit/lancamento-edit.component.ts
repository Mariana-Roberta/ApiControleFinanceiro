import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Location, NgForOf} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {Pessoa} from "../../model/pessoa";
import {Grupo} from "../../model/grupo";
import {PessoaHttpService} from "../../services/pessoa/pessoa-http.service";
import {GrupoHttpService} from "../../services/grupo/grupo-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Lancamento} from "../../model/lancamento";
import {Categoria} from "../../model/categoria";
import {LancamentoHttpService} from "../../services/lancamento/lancamento-http.service";

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
  templateUrl: './lancamento-edit.component.html',
  styleUrl: './lancamento-edit.component.css'
})
export class LancamentoEditComponent implements OnInit{

    lancamento: Lancamento = {
        id: 0,
        nome: '',
        descricao: '',
        data: '',
        tipo: '',
        valor: 0,
        categoria: Categoria.Geral
    };

    grupo: Grupo = {
        id: 0,
        nome: '',
        descricao: ''
    };

    categorias: { label: string; value: Categoria }[] = [];  // Array de opções para o dropdown
    categoriaSelecionada: Categoria | undefined;  // Armazena a categoria selecionada

    constructor(
        private lancamentoHttpService: LancamentoHttpService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) {}

    ngOnInit() {
        // Obtém o id da pessoa da rota
        const id = this.route.snapshot.paramMap.get('id');
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

        this.lancamentoHttpService.updateLancamento(this.lancamento)
            .subscribe({
                next: (value) => {
                    this.router.navigate(['/lancamento/lancamento-listagem'])
                }, error: (err) => {
                    console.error("Falha ao editar lançamento", err)
                    alert("Falha ao editar lançamento")
                }
            });
    }
}
