import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from "./products-list.component";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsListModule { }
