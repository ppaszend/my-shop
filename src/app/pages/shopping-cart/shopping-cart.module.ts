import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingCartComponent} from "./shopping-cart.component";
import {ShoppingCartService} from "../../services/shopping-cart/shopping-cart.service";
import {ProductsListModule} from "./products-list/products-list.module";
import {SharedModule} from "../../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    ProductsListModule,
    SharedModule,
    MatIconModule,
    RouterModule
  ],
  providers: [
    ShoppingCartService
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
