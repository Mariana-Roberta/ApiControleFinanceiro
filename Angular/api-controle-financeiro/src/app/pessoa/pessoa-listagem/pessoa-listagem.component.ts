import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {Button} from "primeng/button";
import {Pessoa} from "../../models/pessoa";
import {PessoaHttpService} from "../../services/pessoa/pessoa-http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pessoa-listagem',
  standalone: true,
  imports: [
    TableModule,
    Button
  ],
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.css'
})
export class PessoaListagemComponent implements OnInit {

  pessoas: Pessoa[] = []; // Lista de pessoas a ser exibida

  constructor(private pessoaHttpService: PessoaHttpService, private router: Router) {}

  ngOnInit() {
    this.carregarPessoas();
  }

  // Método para carregar a lista de pessoas do serviço
  carregarPessoas() {
    this.pessoaHttpService.getPessoas().subscribe(
      (dados: Pessoa[]) => {
        this.pessoas = dados;
      },
      (error) => {
        console.error('Erro ao carregar pessoas', error);
      }
    );
  }

  // Método para editar uma pessoa
  editarPessoa(pessoa: Pessoa) {
    // Navega para a página de edição com o ID da pessoa
    this.router.navigate(['/pessoa/pessoa-edit', pessoa.id]);
  }

  verPessoa(pessoa: Pessoa) {
    // Navega para a página de edição com o ID da pessoa
    this.router.navigate(['/pessoa/pessoa-visualizacao', pessoa.id]);
  }

  criarNovoGrupo(pessoa: Pessoa) {
    this.router.navigate(['/grupo/grupo-formulario', pessoa.id]);
  }

  irParaFormulario() {
    this.router.navigate(['/pessoa/pessoa-formulario'])
  }
}
