import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

import { EleicoesCadastroComponent } from './eleicoes-cadastro/eleicoes-cadastro.component';
import { EleicoesRoutingModule } from './eleicoes-routing.module';
import { SharedModule } from './../shared/shared.module';
import { EleicoesRelatorioComponent } from './eleicoes-relatorio/eleicoes-relatorio.component';

@NgModule({
  declarations: [EleicoesCadastroComponent, EleicoesRelatorioComponent],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    CardModule,
    PanelModule,

    EleicoesRoutingModule,
    SharedModule
  ]
})
export class EleicoesModule { }
