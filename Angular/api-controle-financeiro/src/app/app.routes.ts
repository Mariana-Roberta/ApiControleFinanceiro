import { Routes } from '@angular/router';
import { PessoaFormularioComponent } from './pessoa/pessoa-formulario/pessoa-formulario.component';
import { PessoaListagemComponent } from './pessoa/pessoa-listagem/pessoa-listagem.component';

export const routes: Routes = [
  { path: 'pessoa/pessoa-formulario', component: PessoaFormularioComponent },
  { path: 'pessoa/pessoa-listagem', component: PessoaListagemComponent }
];
