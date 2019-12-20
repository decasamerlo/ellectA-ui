import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { CargoService } from 'src/app/cargos/cargo.service';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-candidatos-cadastro',
  templateUrl: './candidatos-cadastro.component.html',
  styleUrls: ['./candidatos-cadastro.component.css']
})
export class CandidatosCadastroComponent implements OnInit {

  cargos = [];
  candidato = new Candidato();

  constructor(
    private cargoService: CargoService,
    private candidatoService: CandidatoService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.carregarCargos();
  }

  carregarCargos() {
    this.cargoService.listar()
      .then(cargos => {
        this.cargos = cargos.map(cargo => ({ label: cargo.nome, value: cargo.id }));
      });
  }

  salvar(form: NgForm) {
    this.candidatoService.adicionar(this.candidato)
      .then(candidato => {
        this.toasty.success(`Candidato ${candidato.id} salvo com sucesso!`);
        form.reset();
        this.candidato = new Candidato();
      }).catch(erro => console.log('erro: ', erro));
  }

}
