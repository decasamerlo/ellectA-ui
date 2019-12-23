import { Component, OnInit } from '@angular/core';
import { EleicaoService } from '../eleicao.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Eleicao } from '../eleicao';
import { CargoService } from 'src/app/cargos/cargo.service';
import { Candidato } from 'src/app/candidatos/candidato';
import { Voto } from 'src/app/votos/voto';
import { CandidatoService } from 'src/app/candidatos/candidato.service';

@Component({
  selector: 'app-eleicoes-relatorio',
  templateUrl: './eleicoes-relatorio.component.html',
  styleUrls: ['./eleicoes-relatorio.component.css']
})
export class EleicoesRelatorioComponent implements OnInit {

  eleicoes = [];
  votos = [];
  cargos = [];
  candidatos = [];
  eleicao = new Eleicao();

  constructor(
    private eleicaoService: EleicaoService,
    private errorHandler: ErrorHandlerService,
    private cargoService: CargoService,
    private candidatoService: CandidatoService
  ) { }

  ngOnInit() {
    this.carregarEleicoes();
    this.carregarCandidatos();
  }

  carregarEleicoes() {
    this.eleicaoService.listar(false)
      .then(eleicoes => {
        this.eleicoes = eleicoes.map(e => ({ label: e.nome, value: e }));
      })
      .catch(error => this.errorHandler.handle(error));
  }

  selecionarEleicao() {
    if (this.eleicao.dataFim <= new Date()) {
      this.cargoService.listar()
        .then(cargos => this.cargos = cargos)
        .catch(error => this.errorHandler.handle(error));

      this.eleicaoService.buscarRelatorio(this.eleicao.id)
        .then(votos => this.votos = votos)
        .catch(error => this.errorHandler.handle(error));
    } else if (this.eleicao.dataInicio <= new Date()) {
      this.eleicaoService.buscarRelatorio(this.eleicao.id)
        .then(votos => this.votos = votos)
        .catch(error => this.errorHandler.handle(error));
      this.cargos = [];
    } else {
      this.votos = [];
      this.cargos = [];
    }
  }

  filtrarVotosPorCargo = function(voto: Voto) {
    return this.id === voto.candidato.cargo.id;
  };

  filtrarVotosPorCandidato = function(voto: Voto) {
    return this.id === voto.candidato.id;
  };

  filtrarCandidatosPorCargo = function(candidato: Candidato) {
    return this.id === candidato.cargo.id;
  };

  carregarCandidatos() {
    this.candidatoService.pesquisar().then(candidatos => {
      this.candidatos = candidatos;
    });
  }

  get candidatosOrdenados() {
    return this.candidatos.sort((a, b) => {
      return this.votos.filter(this.filtrarVotosPorCandidato, b).length - this.votos.filter(this.filtrarVotosPorCandidato, a).length;
    });
  }

  get mostrarVotos() {
    return this.eleicao.dataInicio <= new Date();
  }

}
