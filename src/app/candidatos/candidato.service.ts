import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Candidato } from './candidato';
import { Cargo } from '../cargos/cargo';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  candidatosUrl: string;

  constructor(private http: HttpClient) {
    this.candidatosUrl = `${environment.apiUrl}/candidatos`;
  }

  pesquisar(): Promise<any> {
    let params = new HttpParams();
    // params = params.set('cargo', cargo.id.toString());
    return this.http.get(`${this.candidatosUrl}`).toPromise();
  }

  adicionar(candidato: Candidato): Promise<Candidato> {
    return this.http.post<Candidato>(this.candidatosUrl, candidato).toPromise();
  }
  
}
