import { Routes } from '@angular/router';
import { PessoaFormularioComponent } from './pessoa/pessoa-formulario/pessoa-formulario.component';
import { PessoaListagemComponent } from './pessoa/pessoa-listagem/pessoa-listagem.component';
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
  { path: 'lancamento/lancamento-formulario/:id', component: LancamentoFormularioComponent },
  { path: 'lancamento/lancamento-listagem', component: LancamentoListagemComponent },
  { path: 'lancamento/lancamento-listagem/:id', component: LancamentoListagemComponent },
  { path: 'lancamento/lancamento-visualizacao/:id', component: LancamentoVisualizacaoComponent },
  { path: 'lancamento/lancamento-edit/:id', component: LancamentoEditComponent },
  { path: 'relatorio', component: RelatorioListagemComponent },
  { path: 'meta/meta-form', component: MetaFormComponent},
  { path: 'meta/meta-list', component: MetaListComponent},
  { path: 'meta/meta-edit/:id', component: MetaEditComponent}
];
