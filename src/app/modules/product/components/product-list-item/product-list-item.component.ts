import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListItemComponent {
  @Input() product!: Product;

  @Output() addToCart: EventEmitter<string> = new EventEmitter();

  onAddToCart() {
    this.addToCart.emit(this.product.id);
  }
}
