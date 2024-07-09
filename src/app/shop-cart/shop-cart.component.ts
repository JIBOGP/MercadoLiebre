import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.scss'
})
export class ShopCartComponent {


  constructor(private cart: ProductCartService, private product: ProductDataService) {
  }
  buy() {
    let products=this.cart.getCart();
    products.forEach(product => {
      //this.product.updateProductStock(product)
      this.cart.removeProduct(product.id)
    });
  }
}
