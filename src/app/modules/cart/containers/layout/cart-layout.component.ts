import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-layout',
  templateUrl: './cart-layout.component.html',
  styleUrls: ['./cart-layout.component.scss']
})
export class CartLayoutComponent {
  amount$: Observable<number> = this.cartService.getTotalAmount();

  count$: Observable<number> = this.cartService.getTotalProductCount();

  constructor(public readonly cartService: CartService) {}
}
