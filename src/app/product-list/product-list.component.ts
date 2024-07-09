import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
    products: Product[] = [];

    constructor(
        private cart: ProductCartService,
        private productDataService: ProductDataService
    ) {
    }

    ngOnInit(): void {
        this.productDataService.getAll()
            .subscribe(products => this.products = products);
    }

    addToCart(product: Product): void {
        if (product.quantity > 0) {
            this.cart.addToCart(product);
            product.stock -= product.quantity;
            product.quantity = 0;
        }
    }
}
