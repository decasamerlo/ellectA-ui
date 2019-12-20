import { Eleitor } from './../../eleitores/eleitor';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  eleitor = new Eleitor();

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('EllectA - Área do Eleitor');
  }

  login(form: NgForm) {
    console.log(this.eleitor);
    if (form.valid) {
      console.log(this.eleitor);
    }
  }

}
