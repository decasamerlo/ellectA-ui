import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';

import { CargoService } from '../cargo.service';
import { Cargo } from '../cargo';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';

@Component({
  selector: 'app-cargos-cadastro',
  templateUrl: './cargos-cadastro.component.html',
  styleUrls: ['./cargos-cadastro.component.css']
})
export class CargosCadastroComponent implements OnInit {

  cargo = new Cargo();

  constructor(
    private title: Title,
    private cargoService: CargoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.title.setTitle('EllectA - Cadastro de Cargo');
  }

  salvar(form: NgForm) {
    if (form.valid) {
      this.cargoService.adicionar(this.cargo)
        .then(cargo => {
          this.toasty.success(`Cargo ${cargo.id} salvo com sucesso!`);
          form.reset();
          this.cargo = new Cargo();
        }).catch(erro => this.errorHandler.handle(erro));
    }
  }

}
