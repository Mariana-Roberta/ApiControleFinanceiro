import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Meta} from "../../model/meta"
import {Form, FormsModule} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { MetaService } from '../../services/meta/meta.service';
import { MetaHttpService } from '../../services/meta/meta-http.service';
import { MessageService } from 'primeng/api';

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
export class MetaFormComponent {

  errorMessage: string = '';

  meta : Meta = {
    id: 0,
    tipo: '',
    valor: 0
  }

  constructor(private _metaService: MetaService,
              private _router: Router,
              private messageService: MessageService,   
              private _metaHttpService: MetaHttpService){
              }



  addMeta(){
    this._metaHttpService.addMeta(this.meta)
    .subscribe({
      next: (value) => {
        this._router.navigate(['/meta/meta-list'])
      }, error: (err) => {
        console.error("falha ao adicionar a meta", err)
        alert("Falha ao adicionar meta")
      }
    });
    }

  onSubmit(){
    this.addMeta;
  }  
}
