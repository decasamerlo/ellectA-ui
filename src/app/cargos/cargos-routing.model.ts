import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CargosCadastroComponent } from './cargos-cadastro/cargos-cadastro.component';

const routes: Routes = [
  { path: 'cargos/new', component: CargosCadastroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
