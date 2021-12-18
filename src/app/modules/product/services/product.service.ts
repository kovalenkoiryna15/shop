import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import mock from '../mocks/mock.json';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(mock.products);

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  buyProduct(id: string): void {}
}
