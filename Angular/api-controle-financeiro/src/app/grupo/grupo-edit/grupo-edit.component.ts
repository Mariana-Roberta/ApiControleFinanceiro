import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Pessoa} from "../../model/pessoa";
import {Grupo} from "../../model/grupo";
import {PessoaHttpService} from "../../services/pessoa/pessoa-http.service";
import {GrupoFormService} from "../../services/grupo/grupo-form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-grupo-edit',
  standalone: true,
    imports: [
        Button,
        FormsModule,
        InputTextModule
    ],
  templateUrl: './grupo-edit.component.html',
  styleUrl: './grupo-edit.component.css'
})
export class GrupoEditComponent implements OnInit {

    grupo: Grupo = {
        id: 0,
        nome: '',
        descricao: '',
        saldo: 0,
        pessoa: undefined
    };

    constructor(
        private grupoFormService: GrupoFormService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) {}

    ngOnInit() {
        // Obtém o id da pessoa da rota
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.grupoFormService.getGrupoById(Number(id)).subscribe(
                (dados: Grupo) => {
                    this.grupo = dados;
                },
                (error) => {
                    console.error('Erro ao carregar dados do grupo', error);
                }
            );
        }
    }

    onSubmit() {
        this.editGrupo();
    }

    editGrupo() {
        this.grupoFormService.updateGrupo(this.grupo)
            .subscribe({
                next: (value) => {
                    this.router.navigate(['/grupo/grupo-listagem'])
                }, error: (err) => {
                    console.error("Falha ao adicionar grupo", err)
                    alert("Falha ao editar grupo")
                }
            });
    }

}
