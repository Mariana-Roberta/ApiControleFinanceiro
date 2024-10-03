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
  { path: 'relatorio', component: RelatorioListagemComponent }
];
