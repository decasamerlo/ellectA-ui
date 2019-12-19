import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eleicoes-cadastro',
  templateUrl: './eleicoes-cadastro.component.html',
  styleUrls: ['./eleicoes-cadastro.component.css']
})
export class EleicoesCadastroComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('EllectA - Cadastro de Eleição');
  }

}
