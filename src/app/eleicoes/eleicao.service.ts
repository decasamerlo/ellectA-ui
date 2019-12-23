import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    return this.http.post<Eleicao>(this.eleicoesUrl, eleicao).toPromise();
  }

  buscarRelatorio(idEleicao: number): Promise<any> {
    let params = new HttpParams();
    params = params.set('id', idEleicao.toString());
    return this.http.get(`${this.eleicoesUrl}/?relatorio`, {params}).toPromise();
  }

}
