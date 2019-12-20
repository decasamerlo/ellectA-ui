import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { CargosCadastroComponent } from './cargos-cadastro/cargos-cadastro.component';
import { CargosRoutingModule } from './cargos-routing.model';

@NgModule({
  declarations: [CargosCadastroComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    ButtonModule,
    InputTextModule,

    CargosRoutingModule
  ]
})
export class CargosModule { }
