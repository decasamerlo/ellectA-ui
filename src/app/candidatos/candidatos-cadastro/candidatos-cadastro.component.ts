import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';

import { CargoService } from 'src/app/cargos/cargo.service';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';

@Component({
  selector: 'app-candidatos-cadastro',
  templateUrl: './candidatos-cadastro.component.html',
  styleUrls: ['./candidatos-cadastro.component.css']
})
export class CandidatosCadastroComponent implements OnInit {

  cargos = [];
  candidato = new Candidato();

  constructor(
    private title: Title,
    private cargoService: CargoService,
    private candidatoService: CandidatoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.title.setTitle('EllectA - Cadastro de Candidato');
    this.carregarCargos();
  }

  carregarCargos() {
    this.cargoService.listar()
      .then(cargos => {
        this.cargos = cargos.map(cargo => ({ label: cargo.nome, value: cargo.id }));
      }).catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) {
    this.candidatoService.adicionar(this.candidato)
      .then(candidato => {
        this.toasty.success(`Candidato ${candidato.id} salvo com sucesso!`);
        form.reset();
        this.candidato = new Candidato();
      }).catch(erro => this.errorHandler.handle(erro));
  }

}
