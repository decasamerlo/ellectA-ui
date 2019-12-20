import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CargoService } from '../cargo.service';
import { Cargo } from '../cargo';

@Component({
  selector: 'app-cargos-cadastro',
  templateUrl: './cargos-cadastro.component.html',
  styleUrls: ['./cargos-cadastro.component.css']
})
export class CargosCadastroComponent implements OnInit {

  cargo = new Cargo();

  constructor(private cargoService: CargoService) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.cargoService.adicionar(this.cargo)
      .then(cargo => {
        console.log(cargo);
        form.reset();
        this.cargo = new Cargo();
      }).catch(erro => console.log('erro: ', erro));
  }

}
