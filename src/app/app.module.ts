import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EleicoesModule } from './eleicoes/eleicoes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    EleicoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
