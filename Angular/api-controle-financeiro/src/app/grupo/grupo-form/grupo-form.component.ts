import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../../model/pessoa"
import {Grupo} from "../../model/grupo"
import {GrupoFormService} from "../../services/grupo/grupo-form.service";
import {PessoaFormularioService} from "../../services/pessoa/pessoa-formulario.service";
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
  grupo: Grupo = {
        id : 0,
        nome : '',
        descricao : '',
        saldo : 0,
        pessoa : undefined
      }

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaFormularioService,
    private grupoFormService: GrupoFormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      const pessoa = this.pessoaService.getById(id);  // Método para buscar a pessoa
      if (pessoa) {
        this.grupo.pessoa = pessoa;  // Atribui a pessoa ao grupo
      } else {
        console.error('Pessoa não encontrada');
      }
    });
    }

    onSubmit() {
          // Adiciona a grupo usando o serviço
          this.grupoFormService.addGrupo(this.grupo);
          this.router.navigate(['/grupo/grupo-listagem']);
        }

}
