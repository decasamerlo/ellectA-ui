import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EleicoesCadastroComponent } from './eleicoes-cadastro/eleicoes-cadastro.component';
import { EleicoesRelatorioComponent } from './eleicoes-relatorio/eleicoes-relatorio.component';

const routes: Routes = [
  { path: 'eleicoes/new', component: EleicoesCadastroComponent },
  { path: 'eleicoes/relatorio', component: EleicoesRelatorioComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EleicoesRoutingModule { }
