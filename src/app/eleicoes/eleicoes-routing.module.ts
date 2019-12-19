import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EleicoesCadastroComponent } from './eleicoes-cadastro/eleicoes-cadastro.component';

const routes: Routes = [
  { path: 'eleicoes/new', component: EleicoesCadastroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EleicoesRoutingModule { }
