import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {CategoriesListComponent} from "./categories-list/categories-list.component";
import {RouterModule} from "@angular/router";
import {CategoriesService} from "../services/categories/categories.service";
import {ProductsGridComponent} from "./products-grid/products-grid.component";
import {MatIconModule} from "@angular/material/icon";
import {ShoppingCartService} from "../services/shopping-cart/shopping-cart.service";
import {DialogComponent} from './dialog/dialog.component';
import { SpinnerComponent } from './icons/spinner/spinner.component';
import {SelectComponent} from "./forms/select/select.component";
import {SegmentedControlComponent} from "./forms/segmented-control/segmented-control.component";
import {TextInputComponent} from "./forms/text-input/text-input.component";
import {CheckboxInputComponent} from "./forms/checkbox-input/checkbox-input.component";
import {DeliveryMethodComponent} from "./forms/delivery-method/delivery-method.component";
import {PaymentMethodComponent} from "./forms/payment-method/payment-method.component";
import {FormComponent} from "./forms/form/form.component";
import {FormsModule as NgFormsModule, ReactiveFormsModule} from "@angular/forms";
import { InfoBoxComponent } from './info-box/info-box.component';


@NgModule({
  declarations: [
    ButtonComponent,
    ProductsListComponent,
    CategoriesListComponent,
    ProductsGridComponent,
    DialogComponent,
    SpinnerComponent,

    SelectComponent,
    SegmentedControlComponent,
    TextInputComponent,
    CheckboxInputComponent,
    DeliveryMethodComponent,
    PaymentMethodComponent,
    FormComponent,
    InfoBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    NgFormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    // modules
    CommonModule,

    // components
    ProductsListComponent,
    CategoriesListComponent,
    ProductsGridComponent,
    DialogComponent,
    SpinnerComponent,
    ButtonComponent,
    InfoBoxComponent,

    // form components
    SelectComponent,
    SegmentedControlComponent,
    TextInputComponent,
    CheckboxInputComponent,
    DeliveryMethodComponent,
    PaymentMethodComponent,
    FormComponent,
  ],
  providers: [
    CategoriesService,
    ShoppingCartService,
  ]
})
export class SharedModule { }
