import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product.component";
import {ShowAsPPipe} from "../../pipes/show-as-p.pipe";
import {SharedModule} from "../../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {ProductService} from "../../services/product/product.service";



@NgModule({
  declarations: [
    ProductComponent,
    ShowAsPPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [
    ProductComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
