import { EleitorService } from './../eleitores/eleitor.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Eleitor } from './../eleitores/eleitor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private eleitorService: EleitorService,
    private router: Router
  ) {
    this.carregarUsuario();
  }

  login(eleitor: Eleitor): Promise<Eleitor> {
    return this.eleitorService.adicionar(eleitor)
      .then(eleitorSalvo => {
        this.armazenarUsuario(eleitorSalvo.id.toString());
        return eleitorSalvo as Eleitor;
      });
  }

  logout() {
    this.removerUsuario();
    this.router.navigate(['/login']);
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

  private removerUsuario() {
    localStorage.removeItem('usuario');
  }

}
