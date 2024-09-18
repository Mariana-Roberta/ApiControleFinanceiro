import { Component } from '@angular/core';
import { PessoaFormularioService } from '../../services/pessoa/pessoa-formulario.service'
import {FloatLabelModule} from "primeng/floatlabel";
import {Button, ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-pessoa-formulario',
  standalone: true,
  imports: [
    FloatLabelModule,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './pessoa-formulario.component.html',
  styleUrl: './pessoa-formulario.component.css'
})
export class PessoaFormularioComponent {

  constructor(private _pessoaFormulario: PessoaFormularioService,
                private _router: Router,
                private _formHttpService: FormHttpService) {
    }

   onSubmit() {
      console.log(this.pessoa);
      // this._formService.addPesssoa(this.pessoa);
      // this._router.navigate(['/form-table']);
      this.addPesssoa();
    }

    addPesssoa() {
      this._formHttpService.addPesssoa(this.pessoa)
        .subscribe({
          next: (valeu) => {
            this._router.navigate(['/form-table'])
          }, error: (err) => {
            console.error("Falha ao adicionar pessoa", err)
            alert("Falha ao adicionar pessoa")
          }
        });
    }

}
