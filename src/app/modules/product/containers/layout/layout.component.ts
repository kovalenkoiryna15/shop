import { Component, OnInit } from '@angular/core';
import { Product } from '../../components/models/product.model';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'product-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class ProductLayoutComponent implements OnInit {
  products: Product[] = [];

  constructor(private readonly shopService: ShopService) { }

  ngOnInit(): void {
    this.products = this.shopService.getProducts();
  }
}
