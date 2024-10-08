import { Routes } from '@angular/router';
import { PessoaFormularioComponent } from './pessoa/pessoa-formulario/pessoa-formulario.component';
import { PessoaListagemComponent } from './pessoa/pessoa-listagem/pessoa-listagem.component';
import { GrupoFormComponent } from './grupo/grupo-form/grupo-form.component';
import { GrupoListagemComponent } from './grupo/grupo-listagem/grupo-listagem.component';
import { GrupoVisualizacaoComponent } from './grupo/grupo-visualizacao/grupo-visualizacao.component';
import { GrupoEditComponent } from './grupo/grupo-edit/grupo-edit.component';
import {PessoaVisualizacaoComponent} from "./pessoa/pessoa-visualizacao/pessoa-visualizacao.component";
import {PessoaEditComponent} from "./pessoa/pessoa-edit/pessoa-edit.component";
import {LancamentoFormularioComponent} from "./lancamento/lancamento-formulario/lancamento-formulario.component";
import {LancamentoListagemComponent} from "./lancamento/lancamento-listagem/lancamento-listagem.component";
import {LancamentoVisualizacaoComponent} from "./lancamento/lancamento-visualizacao/lancamento-visualizacao.component";
import {LancamentoEditComponent} from "./lancamento/lancamento-edit/lancamento-edit.component";
import {RelatorioListagemComponent} from "./relatorio/relatorio-listagem/relatorio-listagem.component";
import { MetaFormComponent } from './meta/meta-form/meta-form.component';
import { MetaListComponent } from './meta/meta-list/meta-list.component';
import { MetaEditComponent } from './meta/meta-edit/meta-edit.component';

export const routes: Routes = [
  { path: 'pessoa/pessoa-formulario', component: PessoaFormularioComponent },
  { path: 'pessoa/pessoa-listagem', component: PessoaListagemComponent },
  { path: 'pessoa/pessoa-visualizacao/:id', component: PessoaVisualizacaoComponent },
  { path: 'pessoa/pessoa-edit/:id', component: PessoaEditComponent },
  //{ path: 'grupo/grupo-form', component: GrupoFormComponent },
  { path: 'grupo/grupo-form/:id', component: GrupoFormComponent },
  { path: 'grupo/grupo-listagem/pessoa/:id', component: GrupoListagemComponent },
  { path: 'grupo/grupo-listagem', component: GrupoListagemComponent },
  { path: 'grupo/grupo-visualizacao/:id', component: GrupoVisualizacaoComponent },
  { path: 'grupo/grupo-edit/:id', component: GrupoEditComponent },
  { path: 'lancamento/lancamento-formulario/:id', component: LancamentoFormularioComponent },
  { path: 'lancamento/lancamento-listagem', component: LancamentoListagemComponent },
  { path: 'lancamento/lancamento-listagem/:id', component: LancamentoListagemComponent },
  { path: 'lancamento/lancamento-visualizacao/:id', component: LancamentoVisualizacaoComponent },
  { path: 'lancamento/lancamento-edit/edit/:id/:grupoid', component: LancamentoEditComponent },
  { path: 'lancamento/lancamento-edit/edit/:id', component: LancamentoEditComponent },
  { path: 'relatorio', component: RelatorioListagemComponent },
  { path: 'meta/meta-form/:id', component: MetaFormComponent},
  { path: 'meta/meta-list/:id', component: MetaListComponent},
  { path: 'meta/meta-edit/:id', component: MetaEditComponent},
  { path: '', redirectTo: 'pessoa/pessoa-listagem', pathMatch: 'full' }
];
