import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../components/models/product.model';
import mock from '../mocks/mock.json';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(mock.products);
  cart$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  getProducts(): Product[] {
    return this.products$.getValue();
  }

  getCart(): Product[] {
    return this.cart$.getValue();
  }

  buyProduct(id: string): void {
    const product = this.getProducts().find((product: Product) => product.id === id);
    if (product) {
      this.cart$.next([...this.getCart(), product]);
    }
  }
}
