import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import mock from '../mocks/mock.json';
import { Product } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(mock.products);

  getCart(): Observable<Product[]> {
    return this.cart$.asObservable();
  }

  getTotalAmount(): number {
    return this.cart$.getValue().reduce((acc, product) => acc + +product.price, 0)
  }

  getTotalProductCount(): number {
    return this.cart$.getValue().length;
  }
}
