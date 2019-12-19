import { InputTextModule } from 'primeng/inputtext';
import { CandidatosRoutingModule } from './candidatos-routing.module';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';

import { CandidatosCadastroComponent } from './candidatos-cadastro/candidatos-cadastro.component';

@NgModule({
  declarations: [CandidatosCadastroComponent],
  imports: [
    CommonModule,

    DropdownModule,
    ButtonModule,
    InputTextModule,

    CandidatosRoutingModule
  ]
})
export class CandidatosModule { }
