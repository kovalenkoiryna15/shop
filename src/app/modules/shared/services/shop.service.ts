import { Injectable } from '@angular/core';
import { Product } from '../../product/components/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }
}
