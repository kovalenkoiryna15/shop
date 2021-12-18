import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './containers/cart-list/cart-list.component';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';
import { CartLayoutComponent } from './containers/layout/cart-layout.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartListComponent,
    CartListItemComponent,
    CartLayoutComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
  ]
})
export class CartModule {}
