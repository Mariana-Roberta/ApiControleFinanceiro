import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../model/pessoa"
import {Grupo} from "../model/grupo"
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
  pessoa: Pessoa | undefined;

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const id = +params.get('id')!;
        this.pessoaService.getPessoaById(id).subscribe({
          next: (data: Pessoa) => {
            this.pessoa = data;
          },
          error: (err) => {
            console.error('Erro ao buscar pessoa:', err);
          }
        });
      });
    }

}
