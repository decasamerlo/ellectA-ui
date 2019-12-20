import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  candidatosUrl: string;

  constructor(private http: HttpClient) {
    this.candidatosUrl = `${environment.apiUrl}/candidatos`;
  }

  listar(): Promise<any> {
    return this.http.get(`${this.candidatosUrl}`).toPromise();
  }

  adicionar(candidato: Candidato): Promise<Candidato> {
    const headers = new Headers().append('Content-Type', 'application/json');

    return this.http.post<Candidato>(this.candidatosUrl, candidato).toPromise();
  }
}
