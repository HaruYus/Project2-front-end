import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from './product.model';
import { ProductsService } from './products.service';
import { AccountsComponent } from '../accounts/accounts.component';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  allProducts: ProductModel[] = [];



  constructor(private productsService: ProductsService,private accountComponent: AccountsComponent, private cartComponent : CartComponent, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {

    this.productsService.displayAllProducts().subscribe((response)=>{
      console.log(response);
      this.allProducts = response;
    });

  }

  addToCart(productToAdd : ProductModel){

    this.cartComponent.addingItem(productToAdd, this.accountComponent.getId());

  }

}
