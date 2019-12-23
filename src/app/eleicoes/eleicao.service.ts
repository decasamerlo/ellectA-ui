import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as moment from 'moment';

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

  listar(apenasAtivas: boolean): Promise<any> {
    let params = new HttpParams();
    params = params.set('apenasAtivas', apenasAtivas.toString());
    return this.http.get(`${this.eleicoesUrl}`, {params}).toPromise()
      .then(eleicoes => {
        this.converterStringsParaDatas(eleicoes);
        return eleicoes;
      });
  }

  adicionar(eleicao: Eleicao): Promise<Eleicao> {
    return this.http.post<Eleicao>(this.eleicoesUrl, eleicao).toPromise()
      .then(eleicaoSalva => {
        this.converterStringsParaDatas([eleicaoSalva]);
        return eleicaoSalva;
      });
  }

  buscarRelatorio(idEleicao: number): Promise<any> {
    let params = new HttpParams();
    params = params.set('id', idEleicao.toString());
    return this.http.get(`${this.eleicoesUrl}/?relatorio`, {params}).toPromise();
  }

  private converterStringsParaDatas(eleicoes: any) {
    eleicoes.forEach(eleicao => {
      eleicao.dataInicio = moment(eleicao.dataInicio, 'YYYY-MM-DD').toDate();
      eleicao.dataFim = moment(eleicao.dataFim, 'YYYY-MM-DD').toDate();
    });
  }

}
