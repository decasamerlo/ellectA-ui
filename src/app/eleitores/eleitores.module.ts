import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';

import { EleitoresVotoComponent } from './eleitores-voto/eleitores-voto.component';
import { EleitoresRoutingModule } from './eleitores-routing.module';

@NgModule({
  declarations: [EleitoresVotoComponent],
  imports: [
    CommonModule,
    FormsModule,

    DropdownModule,

    EleitoresRoutingModule
  ]
})
export class EleitoresModule { }
