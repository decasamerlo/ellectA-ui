import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ErrorHandlerService } from './error-handler.service';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent, MessageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ConfirmDialogModule
  ],
  exports: [NavbarComponent, MessageComponent, ConfirmDialogModule],
  providers: [ErrorHandlerService, ConfirmationService]
})
export class SharedModule { }
