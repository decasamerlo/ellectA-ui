import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Eleitor } from '../eleitor';
import { EleitorService } from '../eleitor.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { EleicaoService } from 'src/app/eleicoes/eleicao.service';
import { Eleicao } from 'src/app/eleicoes/eleicao';
import { CargoService } from 'src/app/cargos/cargo.service';
import { Cargo } from 'src/app/cargos/cargo';
import { Candidato } from 'src/app/candidatos/candidato';
import { CandidatoService } from 'src/app/candidatos/candidato.service';

@Component({
  selector: 'app-eleitores-voto',
  templateUrl: './eleitores-voto.component.html',
  styleUrls: ['./eleitores-voto.component.css']
})
export class EleitoresVotoComponent implements OnInit {

  eleitor = new Eleitor();
  eleicoes = [];
  cargos = [];
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
        this.cargos = [];
        cargos.forEach(cargo => {
          this.carregarCandidatos(cargo);
        });
      })
      .catch(error => this.errorHandler.handle(error));
  }

  carregarCandidatos(cargo: Cargo) {
    this.candidatoService.listar().then(candidatos => {
      this.cargos.push({ nome: cargo.nome, candidatos });
    });
  }

  carregarEleitor(idEleitor: number) {
    this.eleitorService.buscarPorId(idEleitor)
      .then(eleitor => this.eleitor = eleitor)
      .catch(error => this.errorHandler.handle(error));
  }

}
