import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Pessoa} from "../../model/pessoa";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {PessoaHttpService} from "../../services/pessoa/pessoa-http.service";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-pessoa-edit',
  standalone: true,
  imports: [
    FormsModule,
    Button,
    InputTextModule
  ],
  templateUrl: './pessoa-edit.component.html',
  styleUrl: './pessoa-edit.component.css'
})
export class PessoaEditComponent implements OnInit {

  pessoa: Pessoa = {
    id: 0,
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
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

  onSubmit() {
    if (this.pessoa.id) {
      this.pessoaService.updatePessoa(this.pessoa).subscribe(
        () => {
          this.router.navigate(['/pessoa/pessoa-listagem']); // Navega de volta para a lista de pessoas
        },
        (error) => {
          console.error('Erro ao atualizar pessoa', error);
        }
      );
    }
  }

  voltar() {
    this.location.back(); // Volta para a página anterior no histórico
  }

  formatarCpf() {
    let cpf = this.pessoa.cpf.replace(/\D/g, '');
    if (cpf.length > 11) {
      cpf = cpf.slice(0, 11);
    }
    if (cpf.length > 9) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
    } else if (cpf.length > 6) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-');
    } else if (cpf.length > 3) {
      cpf = cpf.replace(/(\d{3})(\d{1})/, '$1.$2');
    }
    this.pessoa.cpf = cpf;
  }

  formatarTelefone() {
    let telefone = this.pessoa.telefone.replace(/\D/g, '');
    if (telefone.length > 11) {
      telefone = telefone.slice(0, 11);
    }
    if (telefone.length > 10) {
      telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (telefone.length > 5) {
      telefone = telefone.replace(/(\d{2})(\d{5})/, '($1) $2-');
    } else if (telefone.length > 2) {
      telefone = telefone.replace(/(\d{2})/, '($1)');
    }
    this.pessoa.telefone = telefone;
  }
}
