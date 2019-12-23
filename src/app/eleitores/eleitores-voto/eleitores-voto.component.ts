import { Cargo } from './../../cargos/cargo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfirmationService } from 'primeng/api';

import { Eleitor } from '../eleitor';
import { EleitorService } from '../eleitor.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { EleicaoService } from 'src/app/eleicoes/eleicao.service';
import { CargoService } from 'src/app/cargos/cargo.service';
import { CandidatoService } from 'src/app/candidatos/candidato.service';
import { Candidato } from 'src/app/candidatos/candidato';
import { ProtocoloService } from 'src/app/protocolos/protocolo.service';
import { Protocolo } from 'src/app/protocolos/protocolo';
import { AuthService } from 'src/app/seguranca/auth.service';
import { VotoService } from 'src/app/votos/voto.service';
import { Voto } from 'src/app/votos/voto';

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
  candidatosSelecionados = [];
  idEleicao: number;
  protocolo = new Protocolo();

  constructor(
    private route: ActivatedRoute,
    private eleitorService: EleitorService,
    private eleicaoService: EleicaoService,
    private cargoService: CargoService,
    private candidatoService: CandidatoService,
    private protocoloService: ProtocoloService,
    private votoService: VotoService,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService,
    private confirmation: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit() {
    const idEleitor = this.route.snapshot.params['id'];
    this.carregarEleitor(idEleitor);
    this.carregarEleicoes();
    this.carregarCandidatos();
  }

  carregarEleicoes() {
    this.eleicaoService.listar(true)
      .then(eleicoes => {
        this.eleicoes = eleicoes.map(e => ({ label: e.nome, value: e.id }));
      })
      .catch(error => this.errorHandler.handle(error));
  }

  selecionarEleicao() {
    this.candidatosSelecionados = [];
    this.carregarProtocolo();
    this.carregarCargos();
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
    this.protocolo.eleitor.id = idEleitor;
    this.eleitorService.buscarPorId(idEleitor)
      .then(eleitor => this.eleitor = eleitor)
      .catch(error => this.errorHandler.handle(error));
  }

  filtrarPorCargo = function (candidato: Candidato) {
    return this.id === candidato.cargo.id;
  }

  limparPorCargo = function (candidato: Candidato) {
    return this.id !== candidato.cargo.id;
  }

  selecionaCandidato(candidato: Candidato) {
    if (!this.protocolo.id) {
      if (this.candidatosSelecionados.includes(candidato)) {
        this.candidatosSelecionados = this.candidatosSelecionados.filter(this.limparPorCargo, candidato.cargo);
      } else {
        this.candidatosSelecionados = this.candidatosSelecionados.filter(this.limparPorCargo, candidato.cargo);
        this.candidatosSelecionados.push(candidato);
      }
    }
  }

  carregarProtocolo() {
    this.protocolo.eleicao.id = this.idEleicao;
    this.protocoloService.buscar(this.eleitor.id, this.idEleicao)
      .then(protocolo => {
        if (protocolo) {
          this.protocolo = protocolo;
          this.votoService.buscarPorProtocolo(protocolo)
            .then(votos => {
              votos.forEach(voto => {
                this.candidatosSelecionados.push(voto.candidato);
              });
            });
        } else {
          this.protocolo.id = null;
        }
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  votar() {
    this.protocoloService.adicionar(this.protocolo)
      .then(protocolo => {
        this.protocolo = protocolo;
        this.candidatosSelecionados.forEach(candidato => {
          let voto = new Voto();
          voto.candidato = candidato;
          voto.protocolo = this.protocolo;
          this.votoService.adicionar(voto)
            .catch(erro => this.errorHandler.handle(erro));
        });
        this.confirmation.confirm({
          message: `O seu voto foi computado com sucesso, através do protocolo ${this.protocolo.codigo}`,
          accept: () => {
            this.router.navigate(['/eleicoes/relatorio']);
          },
          reject: () => {
            this.auth.logout();
          }
        });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  candidatosFiltradosPorCargo(cargo: Cargo) {
    if (this.protocolo.id) {
      return this.candidatosSelecionados.filter(this.filtrarPorCargo, cargo);
    } else {
      return this.candidatos.filter(this.filtrarPorCargo, cargo);
    }
  }

}
