import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

import { EleicoesCadastroComponent } from './eleicoes-cadastro/eleicoes-cadastro.component';
import { EleicoesRoutingModule } from './eleicoes-routing.module';

@NgModule({
  declarations: [EleicoesCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    CalendarModule,

    EleicoesRoutingModule
  ]
})
export class EleicoesModule { }
