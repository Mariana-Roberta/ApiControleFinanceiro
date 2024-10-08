import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Meta} from "../../model/meta"
import {FormsModule} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { MetaService } from '../../services/meta/meta.service';
import { MetaHttpService } from '../../services/meta/meta-http.service';
import { MessageService } from 'primeng/api';
import { Grupo } from '../../model/grupo';
import {GrupoFormService} from "../../services/grupo/grupo-form.service";
import { Categoria } from '../../model/categoria';
import { DropdownModule } from 'primeng/dropdown';
import { NgForOf, Location, NgStyle, CurrencyPipe, NgIf } from '@angular/common';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-meta-form',
  standalone: true,
  imports: [
    PanelModule,
    CurrencyPipe,
    FloatLabelModule,
    NgStyle,
    NgIf,
    ButtonModule,
    InputTextModule,
    FormsModule,
    NgForOf,
    DropdownModule
  ],
  providers: [MessageService],
  templateUrl: './meta-form.component.html',
  styleUrls: ['./meta-form.component.css']
})
export class MetaFormComponent implements OnInit {

  errorMessage: string = '';

  meta : Meta = {
    id: 0,
    categoria: Categoria.Geral,
    valor: 0
  }

  grupo: Grupo = {
    id: 0,
    nome: '',
    descricao: '',
    saldo: 0,
    pessoa: undefined
};

categorias: { label: string; value: Categoria }[] = [];  // Array de opções para o dropdown
categoriaSelecionada: Categoria | undefined;  // Armazena a categoria selecionada

  constructor(private _metaService: MetaService,
              private _router: Router,
              private route: ActivatedRoute,
              private messageService: MessageService,   
              private _metaHttpService: MetaHttpService,
              private grupoFormService: GrupoFormService,
              private location: Location){
              }





  ngOnInit() {
    // Obtém o id da pessoa da rota
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
        this.grupoFormService.getGrupoById(Number(id)).subscribe(
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

onSubmit(){
  if (this.categoriaSelecionada) {
    this.meta.categoria = this.categoriaSelecionada;
  }
  console.log(this.categoriaSelecionada);
  console.log(JSON.stringify(this.meta));

    this._metaHttpService.addMeta(this.meta, this.grupo)
              .subscribe({
                  next: (value) => {
                      this._router.navigate(['meta/meta-list', this.grupo.id])
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








