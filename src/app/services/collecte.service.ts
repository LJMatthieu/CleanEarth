import { Injectable } from '@angular/core';
import { Collecte } from '../model/collecte.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})

export class CollecteService {

  collecte: Collecte[] = [];
  apiURL: string = 'http://localhost:8083/collectes/api';

  constructor(private http: HttpClient) { 
  }

  getListOfCollect(): Observable <Collecte[]>{
    return this.http.get<Collecte[]>(this.apiURL);
  }

  addCollecte( collecte : Collecte) :Observable<Collecte>{
    return this.http.post<Collecte>(this.apiURL, collecte, httpOptions);
    }
}
