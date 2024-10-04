import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Meta} from "../../model/meta"
import {Form, FormsModule} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { MetaService } from '../../services/meta/meta.service';
import { MetaHttpService } from '../../services/meta/meta-http.service';
import { MessageService } from 'primeng/api';
import { Grupo } from '../../model/grupo';
import {GrupoFormService} from "../../services/grupo/grupo-form.service";
import { Categoria } from '../../model/categoria';

@Component({
  selector: 'app-meta-form',
  standalone: true,
  imports: [
    FloatLabelModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  providers: [MessageService],
  templateUrl: './meta-form.component.html',
  styleUrls: ['./meta-form.component.css']
})
export class MetaFormComponent implements OnInit {

  errorMessage: string = '';

  meta : Meta = {
    id: 0,
    tipo: '',
    valor: 0
  }

  grupo: Grupo = {
    id: 0,
    nome: '',
    descricao: '',
    saldo: 0,
    pessoa: undefined
};

tipos: { label: string; value: Categoria }[] = [];// Array de opções para o dropdown
    tipoSelecionada: Categoria | undefined; // Armazena a categoria selecionada

  constructor(private _metaService: MetaService,
              private _router: Router,
              private route: ActivatedRoute,
              private messageService: MessageService,   
              private _metaHttpService: MetaHttpService,
              private grupoFormService: GrupoFormService){
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

  }

onSubmit(){
  if (this.tipoSelecionada) {
    this.meta.tipo = this.tipoSelecionada;
}
console.log(this.tipoSelecionada);
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
    

}








