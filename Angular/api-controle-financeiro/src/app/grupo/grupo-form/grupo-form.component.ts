import { Component, OnInit } from '@angular/core';
import { NgIf, Location} from "@angular/common";
import {Pessoa} from "../../model/pessoa"
import {PessoaHttpService} from "../../services/pessoa/pessoa-http.service";
import {Grupo} from "../../model/grupo"
import {GrupoFormService} from "../../services/grupo/grupo-form.service";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {Button} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import { MatSnackBar } from '@angular/material/snack-bar';
import {FieldsetModule} from "primeng/fieldset";

@Component({
  selector: 'app-grupo-form',
  standalone: true,
  imports: [
    FieldsetModule,
    NgIf,
    Button,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './grupo-form.component.html',
  styleUrl: './grupo-form.component.css'
})
export class GrupoFormComponent implements OnInit {
  pessoa: Pessoa = {
    id:0,
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  };
  grupo: Grupo = {
        id : 0,
        nome : '',
        descricao : '',
        saldo : 0,
        pessoa : undefined
      };

  constructor(
    private pessoaService: PessoaHttpService,
    private route: ActivatedRoute,
    private grupoFormService: GrupoFormService,
    private router: Router,
    private snackBar: MatSnackBar,
    private location: Location
  ){}

  ngOnInit(): void {
   const pessoaIdParam = this.route.snapshot.paramMap.get('id');
    if (pessoaIdParam) {
      this.pessoaService.getPessoaById(Number(pessoaIdParam)).subscribe(
        (dados: Pessoa) => {
          this.pessoa = dados;
    },
    (error) =>{
      console.error('Erro ao carregar pessoa', error);
    });
    }
  }

    onSubmit() {
        this.addGrupo();
        }

        addGrupo() {
          // Verifica se o nome do grupo tem mais de 3 caracteres
          if (this.grupo.nome && this.grupo.nome.length < 3) {
            //alert("O nome do grupo deve ter pelo menos 3 caracteres.");
            this.snackBar.open('Por favor, insira um nome de grupo com pelo menos 3 caracteres.', 'Fechar', {
                    duration: 3000 // Duração em milissegundos
                  });
            return; // Interrompe a execução se a validação falhar
          }
      
          if (this.grupo.descricao && this.grupo.descricao.length < 10) {
            this.snackBar.open('Por favor, insira uma descrição de grupo com pelo menos 10 caracteres.', 'Fechar', {
                    duration: 3000 // Duração em milissegundos
                  });
            return; // Interrompe a execução se a validação falhar
          }

    this.grupoFormService.createGrupo(this.grupo, this.pessoa)
      .subscribe({
        next: (value) => {
          this.router.navigate(['/grupo/grupo-listagem/pessoa/', this.pessoa.id])
        }, error: (err) => {
          console.error("Falha ao adicionar grupo", err)
          alert("Falha ao adicionar grupo")
        }
      });
    }

    voltar() {
      this.location.back(); // Volta para a página anterior no histórico
    }
}
