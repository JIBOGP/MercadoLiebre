import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent {
    cartList$: Observable<Product[]>;

    constructor(private cart: ProductCartService) {
        this.cartList$ = cart.cartList.asObservable();
    }

    getTotalPrice(): number {
        let totalPrice = 0;
        this.cartList$.subscribe(products => {
            products.forEach(product => {
                if (product.offerprice!=0 && product.offerprice<product.price) {
                    totalPrice += product.offerprice*product.quantity;
                }else{
                    totalPrice += product.price*product.quantity;
                }
            });
        });
        return totalPrice;
    }

}
