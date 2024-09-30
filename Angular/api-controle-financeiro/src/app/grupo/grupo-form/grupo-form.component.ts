import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Pessoa} from "../../model/pessoa"
import {Grupo} from "../../model/grupo"
import {GrupoFormService} from "../../services/grupo/grupo-form.service";
import {Router} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";
import {Form, FormsModule} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-grupo-form',
  standalone: true,
  imports: [
    FloatLabelModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './grupo-form.component.html',
  styleUrl: './grupo-form.component.css'
})
export class GrupoFormComponent implements OnInit {
  pessoaId: number | undefined;
  grupoForm: FormGroup;
 /* grupo: Grupo = {
        id : 0,
        nome : '',
        descricao : '',
        saldo : 0,
        pessoa : undefined
      }*/

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private grupoFormService: GrupoFormService,
    private router: Router
  ) {this.grupoForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    descricao: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    pessoaId: ['', [Validators.required]]
  });}

  ngOnInit(): void {
    const pessoaIdParam = this.route.snapshot.paramMap.get('pessoaId');
    if (pessoaIdParam !== null) {
      this.pessoaId = +pessoaIdParam;
    } else {
      console.error('pessoaId not found in route parameters.');
    }
    this.grupoForm.patchValue({ pessoaId: this.pessoaId });
    }

    onSubmit() {
          // Adiciona a grupo usando o serviço
          if (this.grupoForm.valid) {
            this.grupoFormService.createGrupo(this.grupoForm.value).subscribe(response => {
              console.log('Grupo criado com sucesso:', response);
            });
          }
        }

}
