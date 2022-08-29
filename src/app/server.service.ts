import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  apiURL: string = 'http://localhost:8083/collectes/api';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        
    });
  }

  public getJSON(): Observable<any> {
      return this.http.get(this.apiURL);
  }

}
