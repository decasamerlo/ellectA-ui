import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/cargos/cargo.service';

@Component({
  selector: 'app-candidatos-cadastro',
  templateUrl: './candidatos-cadastro.component.html',
  styleUrls: ['./candidatos-cadastro.component.css']
})
export class CandidatosCadastroComponent implements OnInit {

  cargos = [];

  constructor(private cargoService: CargoService) { }

  ngOnInit() {
    this.carregarCargos();
  }

  carregarCargos() {
    this.cargoService.listar()
      .then(cargos => {
        this.cargos = cargos.map(cargo => ({ label: cargo.nome, value: cargo.id }));
      });
  }

}
