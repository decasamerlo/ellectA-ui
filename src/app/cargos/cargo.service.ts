import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Cargo } from './cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  cargosUrl: string;

  constructor(private http: HttpClient) {
    this.cargosUrl = `${environment.apiUrl}/cargos`;
  }

  listar(): Promise<any> {
    return this.http.get(`${this.cargosUrl}`).toPromise();
  }

  adicionar(cargo: Cargo): Promise<Cargo> {
    return this.http.post<Cargo>(this.cargosUrl, cargo).toPromise();
  }

}
