import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eleitores-voto',
  templateUrl: './eleitores-voto.component.html',
  styleUrls: ['./eleitores-voto.component.css']
})
export class EleitoresVotoComponent implements OnInit {

  idEleitor: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idEleitor = this.route.snapshot.params['id'];
  }

}
