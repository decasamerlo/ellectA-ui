import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Protocolo } from './protocolo';

@Injectable({
  providedIn: 'root'
})
export class ProtocoloService {

  protocolosUrl: string;

  constructor(private http: HttpClient) {
    this.protocolosUrl = `${environment.apiUrl}/protocolos`;
  }

  buscar(eleicao: number, eleitor: number): Promise<any> {
    let params = new HttpParams();
    params = params.set('eleicao', eleicao.toString());
    params = params.set('eleitor', eleitor.toString());
    return this.http.get(`${this.protocolosUrl}`, {params}).toPromise();
  }

  adicionar(protocolo: Protocolo): Promise<Protocolo> {
    return this.http.post<Protocolo>(this.protocolosUrl, protocolo).toPromise();
  }

  buscarPorId(id: number): Promise<Protocolo> {
    return this.http.get(`${this.protocolosUrl}/${id}`).toPromise()
      .then(response => response as Protocolo);
  }

}
