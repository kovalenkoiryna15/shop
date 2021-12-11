import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartLayoutComponent } from './containers/cart-layout/cart-layout.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartRoutingModule } from './cart-routing.module';
// import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartLayoutComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    // SharedModule,
  ]
})
export class CartModule { }
