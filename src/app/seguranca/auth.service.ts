import { EleitorService } from './../eleitores/eleitor.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Eleitor } from './../eleitores/eleitor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private eleitorService: EleitorService
  ) {
    this.carregarUsuario();
  }

  login(eleitor: Eleitor): Promise<void> {
    return this.eleitorService.adicionar(eleitor)
      .then(eleitorSalvo => this.armazenarUsuario(eleitorSalvo.id.toString()));
  }

  private armazenarUsuario(usuario: string) {
    localStorage.setItem('usuario', usuario);
  }

  private carregarUsuario() {
    const usuario = localStorage.getItem('usuario');

    if (usuario) {
      this.armazenarUsuario(usuario);
    }
  }

}
