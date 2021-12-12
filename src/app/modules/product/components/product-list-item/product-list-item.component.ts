import { Component, Input } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input() name = '';
  @Input() price = '';
  @Input() description = '';
  @Input() category = '';
  @Input() isAvailable: boolean = false;
  @Input() id = '';

  constructor(private readonly shopService: ShopService) {}

  addToCart() {
    console.log(`Product ${this.id} added to cart.`);
    this.shopService.buyProduct(this.id);
  }
}
