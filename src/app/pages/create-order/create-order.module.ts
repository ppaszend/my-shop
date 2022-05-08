import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateOrderComponent} from "./create-order.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    CreateOrderComponent
  ]
})
export class CreateOrderModule {}
