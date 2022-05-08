import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import {MatIconModule} from "@angular/material/icon";
import { SegmentedControlComponent } from './segmented-control/segmented-control.component';
import { TextInputComponent } from './text-input/text-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import {FormsModule as NgFormsModule} from "@angular/forms";
import { DeliveryMethodComponent } from './delivery-method/delivery-method.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';



@NgModule({
  declarations: [
    SelectComponent,
    SegmentedControlComponent,
    TextInputComponent,
    CheckboxInputComponent,
    DeliveryMethodComponent,
    PaymentMethodComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgFormsModule,
  ],
  exports: [
    SelectComponent,
    SegmentedControlComponent,
    TextInputComponent,
    CheckboxInputComponent,
    DeliveryMethodComponent,
    PaymentMethodComponent
  ]
})
export class FormsModule { }
