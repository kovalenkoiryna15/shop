import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLayoutComponent } from './containers/layout/layout.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
// import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListItemComponent,
    ProductLayoutComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    // SharedModule,
  ],
})
export class ProductModule { }
