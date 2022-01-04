import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.readProducts());

  readProducts(): Product[] {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products).products : [];
  }

  readCart(): Product[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : this.initCart();
  }

  updateCart(cart: Product[]): Product[] {
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  initCart(): Product[] {
    return this.updateCart([]);
  }

  buyProduct(id: string): void {
    const product = this.products$.getValue().find((product) => product.id === id);
    const cart = [...this.readCart()];

    if (product && cart) {
      const existedProduct = cart.find((product) => product.id === id);

      if (existedProduct) {
        existedProduct.number = existedProduct.number ? existedProduct.number += 1 : 1;
        cart.splice(cart.indexOf(existedProduct), 1, existedProduct);
        this.updateCart(cart);
      } else {
        this.updateCart([
          ...cart,
          {
            ...product,
            number: product.number ? product.number += 1 : 1,
          },
        ]);
      }
    } else if (product) {
      this.updateCart([product]);
    } else {
      this.updateCart([]);
    }
  }
}
