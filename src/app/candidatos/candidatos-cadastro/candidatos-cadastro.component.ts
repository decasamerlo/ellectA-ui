import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatos-cadastro',
  templateUrl: './candidatos-cadastro.component.html',
  styleUrls: ['./candidatos-cadastro.component.css']
})
export class CandidatosCadastroComponent implements OnInit {

  cargos = [
    { label: 'Diretor', value: 1 },
    { label: 'Vice-Diretor', value: 1 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
