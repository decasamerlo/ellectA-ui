import { SharedModule } from './../shared.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;
  menu = 'login';

  constructor() { }

  ngOnInit() {
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

}
