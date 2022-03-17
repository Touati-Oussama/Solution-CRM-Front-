import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  apiURL: string = 'http://localhost:8080/projet';

  constructor(private http: HttpClient) { }

  add(data):any{
    return this.http.post(`${this.apiURL}/add`,data);
    } 

  getAll():any{
    return this.http.get(`${this.apiURL}/all`);
  }
}
