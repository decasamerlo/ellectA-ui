import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Eleitor } from '../eleitor';
import { EleitorService } from '../eleitor.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { EleicaoService } from 'src/app/eleicoes/eleicao.service';
import { Eleicao } from 'src/app/eleicoes/eleicao';

@Component({
  selector: 'app-eleitores-voto',
  templateUrl: './eleitores-voto.component.html',
  styleUrls: ['./eleitores-voto.component.css']
})
export class EleitoresVotoComponent implements OnInit {

  eleitor = new Eleitor();
  eleicoes = [];
  eleicao = new Eleicao();

  constructor(
    private route: ActivatedRoute,
    private eleitorService: EleitorService,
    private eleicaoService: EleicaoService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    const idEleitor = this.route.snapshot.params['id'];
    this.carregarEleitor(idEleitor);
    this.carregarEleicoes();
  }

  carregarEleicoes() {
    this.eleicaoService.listar()
      .then(eleicoes => {
        this.eleicoes = eleicoes.map(e => ({ label: e.nome, value: e.codigo }));
      })
      .catch(error => this.errorHandler.handle(error));
  }

  carregarEleitor(idEleitor: number) {
    this.eleitorService.buscarPorId(idEleitor)
      .then(eleitor => this.eleitor = eleitor)
      .catch(error => this.errorHandler.handle(error));
  }

}
