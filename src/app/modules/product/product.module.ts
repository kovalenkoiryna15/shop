import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLayoutComponent } from './containers/layout/layout.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    ProductListItemComponent,
    ProductLayoutComponent,
    ProductListComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
