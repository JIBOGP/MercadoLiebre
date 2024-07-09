import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://668cb709099db4c579f00a33.mockapi.io/api/v1/products'

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private _productList: Product[] = [];
  productList: BehaviorSubject<Product[]> = new BehaviorSubject(this._productList);

  constructor(private http: HttpClient) {
    this.fetchAllProducts();
  }

  private fetchAllProducts(): void {
    this.http.get<Product[]>(URL)
      .pipe(
        tap((products: Product[]) => {
          products.forEach(product => product.quantity = 0);
          this._productList = products;
          this.productList.next(this._productList);
        })
      )
      .subscribe();
  }

  setProduct(id: number, cant: number) {
    const products = this.productList.value;

    products.forEach(product => {
      if (product.id === id) {
        product.stock = cant;
      }
    });

    this.productList.next(products);
  }

}
