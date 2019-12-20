import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { CpfCnpjModule } from 'ng2-cpf-cnpj';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CpfCnpjModule,

    SegurancaRoutingModule,
    SharedModule
  ]
})
export class SegurancaModule { }
