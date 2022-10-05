import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../products/product.model';
import { CartModel } from './cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProduct: ProductModel = {

    id: 0,
    name: '',
    price: 0,
    stock: 0,
    image: '',  

  }
  allCartItems: CartModel[] = [];

  constructor(private cartservice: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  addingItem(product: ProductModel, userId: number): void {

   this.cartservice.addItem(product, userId).subscribe((response)=>{
      console.log(response);
    });

}

loadCart(): void {

  this.cartservice.displayCart().subscribe((response)=>{
    console.log(response);
    this.allCartItems = response;
  });

}

}