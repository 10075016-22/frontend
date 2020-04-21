import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  

  getEmployees()
  {
    return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees');
  }


}
