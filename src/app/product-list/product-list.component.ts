import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [
    {
      name: "Mesa de Comedor",
      category: "Muebles",
      image: "assets/img/mesa.png",
      price: 180000,
      offerprice: 165000,
      stock: 30,
      stars: 3
    },
    {
      name: "Sofá Reclinable",
      category: "Muebles",
      image: "assets/img/sofa.png",
      price: 250000,
      offerprice: 220000,
      stock: 20,
      stars: 1
    },
    {
      name: "Escritorio de Oficina",
      category: "Muebles",
      image: "assets/img/escritorio.png",
      price: 120000,
      offerprice: 100000,
      stock: 25,
      stars: 2
    },
    {
      name: "Lámpara de Pie",
      category: "Iluminación",
      image: "assets/img/lampara.png",
      price: 80000,
      offerprice: 75000,
      stock: 50,
      stars: 4
    },
    {
      name: "Televisor LED 55 Pulgadas",
      category: "Electrónica",
      image: "assets/img/televisor.png",
      price: 350000,
      offerprice: 320000,
      stock: 15,
      stars: 5
    },
    {
      name: "Batidora de Cocina",
      category: "Electrodomésticos",
      image: "assets/img/batidora.png",
      price: 50000,
      offerprice: 45000,
      stock: 0,
      stars: 5
    },
    {
      name: "Silla de Oficina Ergonómica",
      category: "Muebles",
      image: "assets/img/silla.png",
      price: 90000,
      offerprice: 85000,
      stock: 35,
      stars: 0
    },
    {
      name: "Mesa de Centro de Vidrio",
      category: "Muebles",
      image: "assets/img/mesa_centro.png",
      price: 75000,
      offerprice: 70000,
      stock: 28,
      stars: 0
    },
    {
      name: "Lámpara Colgante",
      category: "Iluminación",
      image: "assets/img/lampara_colgante.png",
      price: 120000,
      offerprice: 110000,
      stock: 18,
      stars: 2
    },
    {
      name: "Refrigeradora Doble Puerta",
      category: "Electrodomésticos",
      image: "assets/img/refrigeradora.png",
      price: 180000,
      offerprice: 0,
      stock: 12,
      stars: 4
    },
    {
      name: "Impresora Multifuncional",
      category: "Tecnología",
      image: "assets/img/impresora.png",
      price: 80000,
      offerprice: 75000,
      stock: 22,
      stars: 3
    }
  ];

  getCount(stock: number): number[] {
    return Array.from({ length: stock }, (_, index) => index + 1);
  }

}
