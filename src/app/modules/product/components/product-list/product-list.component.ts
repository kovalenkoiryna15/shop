import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
}
