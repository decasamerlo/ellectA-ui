import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EleitoresVotoComponent } from './eleitores-voto/eleitores-voto.component';
import { EleitoresRoutingModule } from './eleitores-routing.module';

@NgModule({
  declarations: [EleitoresVotoComponent],
  imports: [
    CommonModule,

    EleitoresRoutingModule
  ]
})
export class EleitoresModule { }
