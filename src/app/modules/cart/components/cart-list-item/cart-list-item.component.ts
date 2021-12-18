import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListItemComponent {
  @Input() id = '';
  @Input() name = '';
  @Input() price = '';
  @Input() description = '';
  @Input() category = '';
  @Input() isAvailable: boolean = false;
  @Output() deleteFromCart: EventEmitter<string> = new EventEmitter();

  onDeleteFromCart() {
    this.deleteFromCart.emit(this.id);
  }
}
