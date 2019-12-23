import { Protocolo } from './../protocolos/protocolo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Voto } from './voto';

@Injectable({
  providedIn: 'root'
})
export class VotoService {

  votosUrl: string;

  constructor(private http: HttpClient) {
    this.votosUrl = `${environment.apiUrl}/votos`;
  }

  adicionar(voto: Voto): Promise<Voto> {
    return this.http.post<Voto>(this.votosUrl, voto).toPromise();
  }

  buscarPorProtocolo(protocolo: Protocolo): Promise<any> {
    let params = new HttpParams();
    params = params.set('idProtocolo', protocolo.id.toString());
    return this.http.get(this.votosUrl, {params}).toPromise();
  }

}
