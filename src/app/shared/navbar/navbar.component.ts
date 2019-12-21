import { SharedModule } from './../shared.module';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;
  menu = 'login';

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  get usuarioAtivo() {
    return localStorage.getItem('usuario');
  }

  toggleMenu() {
    this.exibindoMenu = !this.exibindoMenu;
  }

  toggleSubMenu(menu: string) {
    if (menu === this.menu) {
      this.menu = '';
    } else {
      this.menu = menu;
    }
  }

  logout() {
    this.auth.logout();
  }

}
