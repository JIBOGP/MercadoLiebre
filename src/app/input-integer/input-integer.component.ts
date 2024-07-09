import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  quantity!: number;
  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event: { target: any; }): void {
    let value = event.target.value.trim();
    value = value.replace(/^\D+/g, '');

    const parsedValue = parseInt(value, 10);
    this.quantity = isNaN(parsedValue) ? 0 : Math.max(0, parsedValue);

    this.quantity = Math.min(this.quantity, this.max);
    this.quantityChange.emit(this.quantity);
  }
}
