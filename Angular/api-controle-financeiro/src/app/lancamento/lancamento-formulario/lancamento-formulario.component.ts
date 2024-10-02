import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ActivatedRoute, Router} from "@angular/router";
import {LancamentoHttpService} from "../../services/lancamento/lancamento-http.service";
import {Lancamento} from "../../model/lancamento";
import {Grupo} from "../../model/grupo";
import {GrupoHttpService} from "../../services/grupo/grupo-http.service";
import {DropdownModule} from 'primeng/dropdown';
import {Categoria} from "../../model/categoria";
import {NgForOf} from "@angular/common";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-lancamento-formulario',
  standalone: true,
  imports: [
    Button,
    FormsModule,
    InputTextModule,
    DropdownModule,
    NgForOf,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './lancamento-formulario.component.html',
  styleUrl: './lancamento-formulario.component.css'
})
export class LancamentoFormularioComponent implements OnInit {

  errorMessage: string = '';

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

    constructor(private _router: Router,
                private lancamentoHttpService: LancamentoHttpService,
                private route: ActivatedRoute,
                private grupoHttpService: GrupoHttpService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        // Obtém o id da pessoa da rota
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.grupoHttpService.getGrupoById(Number(id)).subscribe(
                (dados: Grupo) => {
                    this.grupo = dados;
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
        this.addLancamento();
    }


    addLancamento() {
        if (this.categoriaSelecionada) {
            this.lancamento.categoria = this.categoriaSelecionada;
        }
        console.log(this.categoriaSelecionada);
        console.log(JSON.stringify(this.lancamento));

        this.lancamentoHttpService.addLancamento(this.lancamento, this.grupo)
            .subscribe({
                next: (value) => {
                    this._router.navigate(['/pessoa/pessoa-listagem'])
                }, error: (err) => {
                  this.errorMessage = err;
                  this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: this.errorMessage });
                }
            });
    }
}
