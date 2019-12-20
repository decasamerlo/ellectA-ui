import { CandidatosModule } from './candidatos/candidatos.module';
import { CargosModule } from './cargos/cargos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastyModule } from 'ng2-toasty';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { EleicoesModule } from './eleicoes/eleicoes.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ToastyModule.forRoot(),

    EleicoesModule,
    CargosModule,
    CandidatosModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
