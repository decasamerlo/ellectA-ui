import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Eleitor } from '../eleitor';
import { EleitorService } from '../eleitor.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { EleicaoService } from 'src/app/eleicoes/eleicao.service';
import { CargoService } from 'src/app/cargos/cargo.service';
import { Cargo } from 'src/app/cargos/cargo';
import { CandidatoService } from 'src/app/candidatos/candidato.service';
import { Candidato } from 'src/app/candidatos/candidato';

@Component({
  selector: 'app-eleitores-voto',
  templateUrl: './eleitores-voto.component.html',
  styleUrls: ['./eleitores-voto.component.css']
})
export class EleitoresVotoComponent implements OnInit {

  eleitor = new Eleitor();
  eleicoes = [];
  cargos = [];
  candidatos = [];
  idEleicao: number;

  constructor(
    private route: ActivatedRoute,
    private eleitorService: EleitorService,
    private eleicaoService: EleicaoService,
    private cargoService: CargoService,
    private candidatoService: CandidatoService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    const idEleitor = this.route.snapshot.params['id'];
    this.carregarEleitor(idEleitor);
    this.carregarEleicoes();
    this.carregarCandidatos();
  }

  carregarEleicoes() {
    this.eleicaoService.listar()
      .then(eleicoes => {
        this.eleicoes = eleicoes.map(e => ({ label: e.nome, value: e.id }));
      })
      .catch(error => this.errorHandler.handle(error));
  }

  carregarCargos() {
    this.cargoService.listar()
      .then(cargos => {
        this.cargos = cargos;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  carregarCandidatos() {
    this.candidatoService.pesquisar().then(candidatos => {
      this.candidatos = candidatos;
    });
  }

  carregarEleitor(idEleitor: number) {
    this.eleitorService.buscarPorId(idEleitor)
      .then(eleitor => this.eleitor = eleitor)
      .catch(error => this.errorHandler.handle(error));
  }

  filtrarPorCargo = function(candidato: Candidato) {
    return this.id === candidato.cargo.id;
  }

}
