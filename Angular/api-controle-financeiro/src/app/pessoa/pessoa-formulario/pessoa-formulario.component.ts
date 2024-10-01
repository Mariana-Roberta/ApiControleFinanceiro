import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {Router} from "@angular/router";
import {Pessoa} from "../../model/pessoa";
import {PessoaService} from "../../services/pessoa/pessoa.service";
import {PessoaHttpService} from "../../services/pessoa/pessoa-http.service";
import {InputTextModule} from "primeng/inputtext";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pessoa-formulario',
  standalone: true,
  imports: [
    FormsModule,
    Button,
    InputTextModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './pessoa-formulario.component.html',
  styleUrl: './pessoa-formulario.component.css'
})
export class PessoaFormularioComponent {

  // Define o objeto pessoa com valores padrão
  pessoa: Pessoa = {
    id: 0,
    nome: '',
    email: '',
    cpf: '',
    telefone: ''
  }

  // Construtor do componente, onde injetamos o serviço e o router
  constructor(private _pessoaService: PessoaService,
              private _router: Router,
              private _pessoaHttpService: PessoaHttpService,
              private snackBar: MatSnackBar,
              private messageService: MessageService) {
  }

  // Método chamado quando o formulário é submetido
  onSubmit() {
    /*if (this.pessoa.nome != null && this.pessoa.nome != '') {
      this._pessoaService.addPesssoa(this.pessoa);
      this._router.navigate(['/pessoa/pessoa-listagem']);
    } else {
      // Lógica para lidar com o formulário inválido (opcional)
    }*/
    this.addPesssoa();
  }

  addPesssoa() {
    if(!this.pessoa.nome || this.pessoa.nome.trim().length == 0) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Por favor, o nome deve ser informado.' });
      return;
    }
    if (this.pessoa.nome && this.pessoa.nome.length < 2) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Por favor, o nome deve conter no mínimo 2 caracteres.' });
        return; // Interrompe a execução se a validação falhar
      }

    if(!this.pessoa.cpf || this.pessoa.cpf.trim().length == 0) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Por favor, o cpf deve ser informado.' });
      return;
    }
    if (this.pessoa.cpf && this.pessoa.cpf.length < 14) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Por favor, o cpf deve conter 11 dígitos.' });
      return;
    }
    if(!this.pessoa.email || this.pessoa.email.trim().length == 0) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Por favor, o email deve ser informado.' });
      return;
    }
    if (this.pessoa.email && this.pessoa.email.length < 11) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Por favor, o email deve conter no mínimo 11 caracteres.' });
      return;
    }
    if(!this.pessoa.telefone || this.pessoa.telefone.trim().length == 0) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Por favor, o telefone deve ser informado.' });
      return;
    }
    if (this.pessoa.telefone && this.pessoa.telefone.length < 11) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Por favor, o telefone deve conter no mínimo 10 dígitos [(XX) XXXX-XXXX ou (XX) XXXXX-XXXX].' });
      return;
    }

    this._pessoaHttpService.addPesssoa(this.pessoa)
      .subscribe({
        next: (value) => {
          this._router.navigate(['/pessoa/pessoa-listagem'])
        }, error: (err) => {
          console.error("Falha ao adicionar pessoa", err)
          alert("Falha ao adicionar pessoa")
        }
      });
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
