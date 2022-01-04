import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  cart$: Observable<Product[]> = this.cartService.getCart();

  constructor(public readonly cartService: CartService) {}

  deleteFromCart(id: string): void {
    this.cartService.deleteFromCart(id);
  }

  updateNumber({ id, num }: { id: string, num: number }): void {
    this.cartService.updateNumber(id, num);
  }
}
