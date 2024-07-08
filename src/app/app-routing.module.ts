import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ShopAboutComponent } from './shop-about/shop-about.component';
import { ProductShopComponent } from './product-shop/product-shop.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch:'full'
    }, {
        path: 'products',
        component: ProductShopComponent
    }, {
        path: 'cart',
        redirectTo: 'products',
        pathMatch:'full'
    }, {
        path: 'about',
        component: ShopAboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
