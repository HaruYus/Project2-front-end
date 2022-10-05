import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../products/product.model';
import { CartModel } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: string = "http://localhost:5555/api/cart";
  s: string = "/";

  constructor(private httpClient: HttpClient) { }

  addItem(itemAdd : ProductModel, accId: number) : Observable<ProductModel>{

    console.log(itemAdd);
    console.log(accId);

    if(this.s == "/")
    this.s = this.s + 20;

    return this.httpClient.post<ProductModel>(this.baseUrl+this.s, itemAdd);

  }

  displayCart(): Observable<CartModel[]>{


    console.log(this.baseUrl + this.s);

    return this.httpClient.get<CartModel[]>(this.baseUrl + this.s);
  }


}
