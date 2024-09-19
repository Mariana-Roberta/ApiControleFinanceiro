import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../model/pessoa"
import {Grupo} from "../model/grupo"
import {GrupoService} from "../services/grupo/grupo-form.service";
import {PessoaService} from "../services/pessoa/pessoa-formulario.service";
import {Router} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-grupo-form',
  standalone: true,
  imports: [],
  templateUrl: './grupo-form.component.html',
  styleUrl: './grupo-form.component.css'
})
export class GrupoFormComponent implements OnInit {
  pessoaTemp: Pessoa | undefined;
  grupo: Grupo = {
        id = 0;
        nome = '';
        descricao = '';
        saldo = BigDecimal.ZERO;
        pessoa = pessoaTemp;
      }

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private grupoService: GrupoService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const id = +params.get('id')!;
        this.pessoaService.getPessoaById(id).subscribe({
          next: (data: Pessoa) => {
            this.pessoaTemp = data;
          },
          error: (err) => {
            console.error('Erro ao buscar pessoa:', err);
          }
        });
      });
    }

    onSubmit() {
          // Adiciona a grupo usando o serviço
          this._grupoFormService.addGrupo(this.grupo);
          this._router.navigate(['/grupo/grupo-listagem']);
        }

}
