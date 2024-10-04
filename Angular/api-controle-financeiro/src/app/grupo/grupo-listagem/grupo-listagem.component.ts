import { Component } from '@angular/core';
import {Button} from "primeng/button";
import { CurrencyPipe, Location, NgIf, NgStyle } from '@angular/common';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Router, ActivatedRoute} from "@angular/router";
import {Grupo} from "../../model/grupo";
import {GrupoFormService} from "../../services/grupo/grupo-form.service";
import {Pessoa} from "../../model/pessoa"
import { FieldsetModule } from 'primeng/fieldset';
import {PessoaHttpService} from "../../services/pessoa/pessoa-http.service";

@Component({
  selector: 'app-grupo-listagem',
  standalone: true,
  imports: [Button,
    PrimeTemplate,
    FieldsetModule,
    CurrencyPipe,
    NgStyle,
    NgIf,
    TableModule],
  templateUrl: './grupo-listagem.component.html',
  styleUrl: './grupo-listagem.component.css'
})
export class GrupoListagemComponent {
  pessoa: Pessoa = {
    id:0,
    nome: 'indefinida',
    cpf: '',
    email: '',
    telefone: ''
  };
  gruposList: Grupo[] = [];

  constructor(private grupoFormService: GrupoFormService, private router: Router, private pessoaService: PessoaHttpService, private route: ActivatedRoute, private location: Location) {}
  
  //Busca e preenche a pessoa atraves do id recebido e busca a lista de grupos a partir da pessoa
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pessoaService.getPessoaById(Number(id)).subscribe(
        (dados: Pessoa) => {
          this.pessoa = dados;
          this.grupoFormService.getGruposByPessoaId(this.pessoa.id).subscribe(
            (allGrupos: Grupo[]) => {this.gruposList = allGrupos;},
            (error) => {console.error('Erro ao carregar os grupos', error);}
            );
          },
          (error) => {console.error('Erro ao carregar dados da pessoa', error);}
      );
    }
  }

  editarGrupo(grupo: Grupo) {
    this.router.navigate(['/grupo/grupo-edit', grupo.id]);
  }

  verGrupo(grupo: Grupo) {
    this.router.navigate(['/grupo/grupo-visualizacao', grupo.id]);
  }

  novoGrupo(){
    this.router.navigate(['/grupo/grupo-form', this.pessoa.id]);
  }

  viewMeta(){
      this.router.navigate(['/meta/meta-listagem']);
    }

  CriarLancamento(grupo: Grupo){
    this.router.navigate(['/lancamento/lancamento-formulario', grupo.id])
  }

  verLancamentos(grupo: Grupo) {
    this.router.navigate(['/lancamento/lancamento-listagem', grupo.id]);
  }


  voltar() {
    this.location.back(); // Volta para a página anterior no histórico
  }
}
