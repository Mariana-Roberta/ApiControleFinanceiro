import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {Button} from "primeng/button";
import {Pessoa} from "../../model/pessoa";
import {PessoaHttpService} from "../../services/pessoa/pessoa-http.service";
import {NavigationStart, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {filter} from "rxjs";

@Component({
  selector: 'app-pessoa-listagem',
  standalone: true,
    imports: [
        TableModule,
        Button,
        NgIf
    ],
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.css'
})
export class PessoaListagemComponent implements OnInit {

  pessoas: Pessoa[] = []; // Lista de pessoas a ser exibida
  criandoGrupo: boolean = false;

  constructor(private pessoaHttpService: PessoaHttpService, private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
        filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras.state) {
        this.criandoGrupo = navigation.extras.state['criandoGrupo'] || false;
      }
    });
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
    this.router.navigate(['/grupo/grupo-form', pessoa.id]);
  }

  verGrupos(pessoa: Pessoa){
    this.router.navigate(['/grupo/grupo-listagem/pessoa/', pessoa.id])
  }

  irParaFormulario() {
    this.router.navigate(['/pessoa/pessoa-formulario'])
  }
}
