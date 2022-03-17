import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  apiURL: string = 'http://localhost:8080/specialite';

  constructor(private http: HttpClient) { }

  public listeSpecialties():any{
    return this.http.get(`${this.apiURL}/all`);
  }

  delete(id):any{
    return this.http.delete(`${this.apiURL}/delete/${id}`);
  }
  add(data):any{
  return this.http.post(`${this.apiURL}/add`,data);
  }  

  update(data,id):any{
    return this.http.post(`${this.apiURL}/update/${id}`,data)
  }
  getSpecialty(id):any{
    return this.http.get(`${this.apiURL}/${id}`);
  }

}
