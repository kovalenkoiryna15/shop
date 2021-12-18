import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListItemComponent {
  @Input() id = '';
  @Input() name = '';
  @Input() price = '';
  @Input() description = '';
  @Input() category = '';
  @Input() isAvailable: boolean = false;
  @Output() addToCart: EventEmitter<string> = new EventEmitter();

  onAddToCart() {
    this.addToCart.emit(this.id);
  }
}
