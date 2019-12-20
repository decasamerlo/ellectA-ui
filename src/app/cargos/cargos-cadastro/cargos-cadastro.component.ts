import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { CargoService } from '../cargo.service';
import { Cargo } from '../cargo';

@Component({
  selector: 'app-cargos-cadastro',
  templateUrl: './cargos-cadastro.component.html',
  styleUrls: ['./cargos-cadastro.component.css']
})
export class CargosCadastroComponent implements OnInit {

  cargo = new Cargo();

  constructor(
    private cargoService: CargoService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
  }

  salvar(form: NgForm) {
    this.cargoService.adicionar(this.cargo)
      .then(cargo => {
        this.toasty.success(`Cargo ${cargo.id} salvo com sucesso!`);
        form.reset();
        this.cargo = new Cargo();
      }).catch(erro => console.log('erro: ', erro));
  }

}
