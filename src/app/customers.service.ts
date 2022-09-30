import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from './customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  baseUrl : string = "url"

  constructor(private httpClient: HttpClient) { }

  displayAllCustomers(): Observable<CustomerModel[]>{

    return this.httpClient.get<CustomerModel[]>(this.baseUrl);
  }
}
