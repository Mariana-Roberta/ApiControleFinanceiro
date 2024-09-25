import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Meta} from "../../model/meta"
import {Form, FormsModule} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {error} from "@angular/compiler-cli/src/transformers/util";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meta-form',
  standalone: true,
  imports: [
    FloatLabelModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './meta-form.component.html',
  styleUrl: './meta-form.component.css'
})
export class MetaFormComponent {

  meta : Meta = {
    id: 0,
    tipo: '',
    valor: 0
  }

  constructor(private _metaService: MetaService,
              private _router: Router,
              private _metaHttpService


  )

}
