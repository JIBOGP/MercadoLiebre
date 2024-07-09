import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { BehaviorSubject } from 'rxjs';

/**
 * Maneja la lofica deel carrito
 *
 */
@Injectable({
    providedIn: 'root'
})
export class ProductCartService {

    private _cartList: Product[] =[];
    cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);



    constructor() { }

    addToCart(product: Product) {
        const item = this._cartList.find(p => p.name === product.name);
        if (!item) {
            this._cartList.push({ ...product });
        } else {
            item.quantity += product.quantity;
        }
        this.cartList.next(this._cartList);
    }

    getCart(): Product[] {
        return this._cartList;
    }
}

