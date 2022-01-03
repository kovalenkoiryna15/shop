import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(JSON.parse(localStorage.getItem('products')! || JSON.stringify({ products: []})).products);

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  initCart(): string {
    const cart = JSON.stringify([])
    localStorage.setItem('cart', cart);
    return cart;
  }

  buyProduct(id: string): void {
    const product = this.products$.getValue().find((product) => product.id === id);
    const cart = [...JSON.parse(localStorage.getItem('cart')! || this.initCart()) as Product[]];
    if (product && cart) {
      const existedProduct = cart.find((product) => product.id === id);
      if (existedProduct) {
        cart.splice(cart.indexOf(existedProduct), 1, { ...existedProduct, number: existedProduct.number ? existedProduct.number += 1 : 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        localStorage.setItem('cart', JSON.stringify([...cart, { ...product, number: product.number ? product.number += 1 : 1 }]));
      }
    } else if (product) {
      localStorage.setItem('cart', JSON.stringify([product]));
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
}
