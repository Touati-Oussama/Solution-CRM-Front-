import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  apiURL: string = 'http://localhost:8080/types';

  constructor(private http: HttpClient) { }

  public listeType():any{
    return this.http.get(`${this.apiURL}/all`);
  }

  add(data):any{
    return this.http.post(`${this.apiURL}/add`,data);
  }

  delete(id):any{
    return this.http.delete(`${this.apiURL}/delete/${id}`);
  }

  update(data,id):any{
    return this.http.post(`${this.apiURL}/update/${id}`,data)
  }

  getType(id):any{
    return this.http.get(`${this.apiURL}/${id}`);
  }
}
