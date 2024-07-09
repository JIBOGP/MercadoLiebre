import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(
    private cart: ProductCartService,
    private productDataService: ProductDataService
  ) {
    this.products$ = productDataService.productList.asObservable();
  }

  addToCart(product: Product): void {
    if (product.quantity > 0) {
      this.cart.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;
    }
  }
}
