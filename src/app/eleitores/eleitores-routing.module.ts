import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';
import { EleitoresVotoComponent } from './eleitores-voto/eleitores-voto.component';

const routes: Routes = [
  { path: 'eleitores/:id', component: EleitoresVotoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EleitoresRoutingModule { }