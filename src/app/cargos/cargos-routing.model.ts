import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';
import { CargosCadastroComponent } from './cargos-cadastro/cargos-cadastro.component';

const routes: Routes = [
  { path: 'cargos/new', component: CargosCadastroComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
