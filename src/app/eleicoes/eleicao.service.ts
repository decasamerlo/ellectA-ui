import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Eleicao } from './eleicao';

@Injectable({
  providedIn: 'root'
})
export class EleicaoService {

  eleicoesUrl: string;

  constructor(private http: HttpClient) {
    this.eleicoesUrl = `${environment.apiUrl}/eleicoes`;
  }

  listar(): Promise<any> {
    return this.http.get(`${this.eleicoesUrl}`).toPromise();
  }

  adicionar(eleicao: Eleicao): Promise<Eleicao> {
    const headers = new Headers().append('Content-Type', 'application/json');

    return this.http.post<Eleicao>(this.eleicoesUrl, eleicao).toPromise();
  }
}
