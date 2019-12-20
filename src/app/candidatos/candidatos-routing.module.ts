import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';
import { CandidatosCadastroComponent } from './candidatos-cadastro/candidatos-cadastro.component';

const routes: Routes = [
  { path: 'candidatos/new', component: CandidatosCadastroComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
