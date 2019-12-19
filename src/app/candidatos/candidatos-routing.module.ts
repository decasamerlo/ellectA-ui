import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CandidatosCadastroComponent } from './candidatos-cadastro/candidatos-cadastro.component';

const routes: Routes = [
  { path: 'candidatos/new', component: CandidatosCadastroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
