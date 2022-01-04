import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../models/cart.model';

@Component({
  selector: 'cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListItemComponent {
  @Input() product!: Product;

  @Output() deleteFromCart: EventEmitter<string> = new EventEmitter();

  @Output() numberChange: EventEmitter<{ id: string, num: number }> = new EventEmitter();

  onDeleteFromCart() {
    this.deleteFromCart.emit(this.product.id);
  }

  onNumberChange(event: Event) {
    this.numberChange.emit({ id: this.product.id, num: +(<HTMLInputElement>event.target).value });
  }
}
