import { Component, OnInit } from '@angular/core';
import { Product } from '../../components/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class ProductLayoutComponent implements OnInit {
  products: Product[] = [];

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
