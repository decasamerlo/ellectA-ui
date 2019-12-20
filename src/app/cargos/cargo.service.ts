import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cargo } from './cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  cargosUrl = 'http://localhost:8080/cargos';

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get(`${this.cargosUrl}`).toPromise();
  }

  adicionar(cargo: Cargo): Promise<Cargo> {
    const headers = new Headers().append('Content-Type', 'application/json');

    return this.http.post<Cargo>(this.cargosUrl, cargo).toPromise();
  }

}
