import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from "./category.component";
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
