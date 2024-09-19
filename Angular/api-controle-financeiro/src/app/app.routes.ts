import { Routes } from '@angular/router';
import { PessoaFormularioComponent } from './pessoa/pessoa-formulario/pessoa-formulario.component';
import { PessoaListagemComponent } from './pessoa/pessoa-listagem/pessoa-listagem.component';
import { GrupoFormComponent } from './grupo/grupo-form/grupo-form.component';
import { GrupoListagemComponent } from './grupo/grupo-listagem/grupo-listagem.component';

export const routes: Routes = [
  { path: 'pessoa/pessoa-formulario', component: PessoaFormularioComponent },
  { path: 'pessoa/pessoa-listagem', component: PessoaListagemComponent },
  { path: 'grupo/grupo-form', component: GrupoFormComponent },
  { path: 'grupo/grupo-listagem', component: GrupoListagemComponent }
];
