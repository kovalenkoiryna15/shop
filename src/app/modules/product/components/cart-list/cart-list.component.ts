import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  constructor(public readonly shopService: ShopService) {}
}
