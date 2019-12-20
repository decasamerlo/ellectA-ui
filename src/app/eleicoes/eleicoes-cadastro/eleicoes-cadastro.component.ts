import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';

import { EleicaoService } from '../eleicao.service';
import { Eleicao } from '../eleicao';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';

@Component({
  selector: 'app-eleicoes-cadastro',
  templateUrl: './eleicoes-cadastro.component.html',
  styleUrls: ['./eleicoes-cadastro.component.css']
})
export class EleicoesCadastroComponent implements OnInit {

  eleicao = new Eleicao();

  constructor(
    private title: Title,
    private eleicaoService: EleicaoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.title.setTitle('EllectA - Cadastro de Eleição');
  }

  salvar(form: NgForm) {
    this.eleicaoService.adicionar(this.eleicao)
      .then(eleicao => {
        this.toasty.success(`Eleição ${eleicao.id} salva com sucesso!`);
        form.reset();
        this.eleicao = new Eleicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

}
