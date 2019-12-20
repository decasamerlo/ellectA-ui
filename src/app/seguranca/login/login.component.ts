import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { Eleitor } from './../../eleitores/eleitor';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  eleitor = new Eleitor();

  constructor(
    private title: Title,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title.setTitle('EllectA - Área do Eleitor');
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.router.navigate([`/eleitores/${usuario}`]);
    }
  }

  login(form: NgForm) {
    if (form.valid) {
      this.auth.login(this.eleitor)
        .then(eleitor => this.router.navigate([`/eleitores/${this.eleitor.id}`]));
    }
  }

}
