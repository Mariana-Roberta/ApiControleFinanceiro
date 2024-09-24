import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Location, NgIf} from "@angular/common";
import {Pessoa} from "../../models/pessoa";
import {PessoaHttpService} from "../../services/pessoa/pessoa-http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pessoa-visualizacao',
  standalone: true,
  imports: [
    Button,
    PrimeTemplate,
    TableModule,
    NgIf
  ],
  templateUrl: './pessoa-visualizacao.component.html',
  styleUrl: './pessoa-visualizacao.component.css'
})
export class PessoaVisualizacaoComponent implements OnInit {

  pessoa: Pessoa = {
    id: 0,
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    grupos: []
  };

  constructor(
      private pessoaService: PessoaHttpService,
      private route: ActivatedRoute,
      private router: Router,
      private location: Location
  ) {}

  ngOnInit() {
    // Obtém o id da pessoa da rota
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pessoaService.getPessoaById(Number(id)).subscribe(
          (dados: Pessoa) => {
            this.pessoa = dados;
          },
          (error) => {
            console.error('Erro ao carregar dados da pessoa', error);
          }
      );
    }
  }

  editarPessoa(pessoa: Pessoa) {
    // Navega para a página de edição com o ID da pessoa
    this.router.navigate(['/pessoa/pessoa-edit', pessoa.id]);
  }

  voltar() {
    this.location.back(); // Volta para a página anterior no histórico
  }

}
