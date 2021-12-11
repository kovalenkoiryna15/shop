import { Injectable } from '@angular/core';
import { ShopService } from '../../shared/services/shop.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private readonly shopService: ShopService) {}

  getCart() {
    console.log(this.shopService.getCart());
    return this.shopService.getCart();
  }
}
