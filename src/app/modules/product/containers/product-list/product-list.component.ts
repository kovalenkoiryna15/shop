import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products$: Observable<Product[]> = this.productService.getProducts();

  constructor(private readonly productService: ProductService) {}

  onBuyProduct(id: string): void {
    this.productService.buyProduct(id);
  }

  trackById(index: number, item: Product): number {
    return +item.id;
  }
}
