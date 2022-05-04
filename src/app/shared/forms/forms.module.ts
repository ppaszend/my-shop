import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import {MatIconModule} from "@angular/material/icon";
import { SegmentedControlComponent } from './segmented-control/segmented-control.component';



@NgModule({
  declarations: [
    SelectComponent,
    SegmentedControlComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SelectComponent,
    SegmentedControlComponent
  ]
})
export class FormsModule { }
