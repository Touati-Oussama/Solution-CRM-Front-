import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

  
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiURL: string = 'http://localhost:8080/users';
  ROLE = "CLIENT"
  constructor(private http: HttpClient) { }

  public listCustomers():any{
    return this.http.get(`${this.apiURL}/all/${this.ROLE}`);
  }

  public listStaffs():any{
    return this.http.get(`${this.apiURL}/all/teams`);
  }
  add(data):any{
    return this.http.post(`${this.apiURL}/add/customers`,data);
  }

  addStaff(data):any{
    return this.http.post(`${this.apiURL}/add/staff`,data);
  }

  delete(id):any{
    return this.http.delete(`${this.apiURL}/delete/${id}`);
  }
}
