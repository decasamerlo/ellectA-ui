import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ErrorHandlerService } from './error-handler.service';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent, MessageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, MessageComponent],
  providers: [ErrorHandlerService]
})
export class SharedModule { }
