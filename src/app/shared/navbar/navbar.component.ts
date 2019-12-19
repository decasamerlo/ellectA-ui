import { SharedModule } from './../shared.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.exibindoMenu = !this.exibindoMenu;
  }

}
