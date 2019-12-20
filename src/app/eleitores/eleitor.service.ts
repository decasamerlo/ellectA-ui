import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment.prod';
import { Eleitor } from './eleitor';

@Injectable({
  providedIn: 'root'
})
export class EleitorService {

  eleitoresUrl: string;

  constructor(private http: HttpClient) {
    this.eleitoresUrl = `${environment.apiUrl}/eleitores`;
  }

  listar(): Promise<any> {
    return this.http.get(`${this.eleitoresUrl}`).toPromise();
  }

  adicionar(eleitor: Eleitor): Promise<Eleitor> {
    return this.http.post<Eleitor>(this.eleitoresUrl, eleitor).toPromise();
  }
}
