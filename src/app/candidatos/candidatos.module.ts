import { InputTextModule } from 'primeng/inputtext';
import { CandidatosRoutingModule } from './candidatos-routing.module';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';

import { CandidatosCadastroComponent } from './candidatos-cadastro/candidatos-cadastro.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [CandidatosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,

    DropdownModule,
    ButtonModule,
    InputTextModule,

    CandidatosRoutingModule,
    SharedModule
  ]
})
export class CandidatosModule { }
