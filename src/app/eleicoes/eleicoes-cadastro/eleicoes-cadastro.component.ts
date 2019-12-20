import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { EleicaoService } from '../eleicao.service';
import { Eleicao } from '../eleicao';

@Component({
  selector: 'app-eleicoes-cadastro',
  templateUrl: './eleicoes-cadastro.component.html',
  styleUrls: ['./eleicoes-cadastro.component.css']
})
export class EleicoesCadastroComponent implements OnInit {

  eleicao = new Eleicao();

  constructor(
    private title: Title,
    private eleicaoService: EleicaoService
  ) { }

  ngOnInit() {
    this.title.setTitle('EllectA - Cadastro de Eleição');
  }

  salvar(form: NgForm) {
    this.eleicaoService.adicionar(this.eleicao)
      .then(eleicao => {
        console.log(eleicao);
        form.reset();
        this.eleicao = new Eleicao();
      }).catch(erro => console.log('erro: ', erro));
  }

}
