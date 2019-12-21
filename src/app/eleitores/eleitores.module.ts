import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

import { EleitoresVotoComponent } from './eleitores-voto/eleitores-voto.component';
import { EleitoresRoutingModule } from './eleitores-routing.module';

@NgModule({
  declarations: [EleitoresVotoComponent],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    DropdownModule,
    CardModule,
    PanelModule,

    EleitoresRoutingModule
  ]
})
export class EleitoresModule { }
