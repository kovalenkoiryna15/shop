import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Product } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.readCart());

  cartTotalAmount$: BehaviorSubject<number> = new BehaviorSubject<number>(this.updateTotalAmount(this.cart$.getValue()));

  cartTotalProductCount$: BehaviorSubject<number> = new BehaviorSubject<number>(this.updateTotalProductCount(this.cart$.getValue()));

  readCart(): Product[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  updateCart(cart: Product[]): void {
    this.cart$.next(cart);
    this.cartTotalAmount$.next(this.updateTotalAmount(cart));
    this.cartTotalProductCount$.next(this.updateTotalProductCount(cart));

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): Observable<Product[]> {
    this.updateCart(this.readCart());

    return this.cart$.asObservable();
  }

  getTotalAmount(): Observable<number> {
    return this.cartTotalAmount$.asObservable();
  }

  getTotalProductCount(): Observable<number> {
    return this.cartTotalProductCount$.asObservable();
  }

  deleteFromCart(id: string): void {
    const product = this.cart$.getValue().find((product) => product.id === id);

    if (product) {
      const cart = [...this.cart$.getValue()];

      (--product.number > 0)
        ? cart.splice(cart.indexOf(product), 1,  { ...product, number: product.number })
        : cart.splice(cart.indexOf(product), 1);

      this.updateCart(cart);
    }
  }

  updateTotalAmount(cart: Product[]): number {
    return cart.reduce((acc, product) => acc + (+product.price * product.number), 0);
  }

  updateTotalProductCount(cart: Product[]): number {
    return cart.reduce((acc, product) => acc + product.number, 0);
  }
}
