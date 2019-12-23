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
    console.log(voto);
    return this.http.post<Voto>(this.votosUrl, voto).toPromise();
  }
  
}
