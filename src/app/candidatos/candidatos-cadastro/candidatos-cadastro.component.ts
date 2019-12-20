import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    private candidatoService: CandidatoService
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
        console.log(candidato);
        form.reset();
        this.candidato = new Candidato();
      }).catch(erro => console.log('erro: ', erro));
  }

}
