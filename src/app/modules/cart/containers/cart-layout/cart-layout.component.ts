import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product/components/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-layout',
  templateUrl: './cart-layout.component.html',
  styleUrls: ['./cart-layout.component.scss']
})
export class CartLayoutComponent implements OnInit {
  cart: Product[] = [];

  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
}
