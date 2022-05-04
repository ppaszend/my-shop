import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingCartComponent} from "./shopping-cart.component";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ProductsListModule} from "./products-list/products-list.module";



@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    ProductsListModule
  ],
  providers: [
    ShoppingCartService
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
