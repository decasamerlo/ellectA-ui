import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EleicoesCadastroComponent } from './eleicoes/eleicoes-cadastro/eleicoes-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'eleicoes/new', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
