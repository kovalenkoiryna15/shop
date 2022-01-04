import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductLayoutComponent } from './containers/layout/layout.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductListItemComponent,
    ProductLayoutComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
  ]
})
export class ProductModule {}
