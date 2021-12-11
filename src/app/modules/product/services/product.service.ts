import { Injectable } from '@angular/core';
import { ShopService } from '../../shared/services/shop.service';
import { Product } from '../components/models/product.model';
import mock from '../mocks/mock.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly shopService: ShopService) {}

  getProducts() {
    return mock.products;
  }

  buyProduct(id: string) {
    const product = this.getProducts().find((product: Product) => product.id === id);
    this.shopService.addToCart(product);
  }
}
