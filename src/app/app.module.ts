import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { EleicoesCadastroComponent } from './eleicoes/eleicoes-cadastro/eleicoes-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    EleicoesCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ButtonModule,
    InputTextModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
