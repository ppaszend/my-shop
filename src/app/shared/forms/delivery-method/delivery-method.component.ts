import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {DeliveryMethod} from "../../../models/delivery-method";

@Component({
  selector: 'form-delivery-method',
  templateUrl: './delivery-method.component.html',
  styleUrls: ['./delivery-method.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DeliveryMethodComponent),
    multi: true
  }]
})
export class DeliveryMethodComponent implements ControlValueAccessor {
  @Input() options: DeliveryMethod[] = [];

  private _value: string = 'ups';
  public get value(): string {
    return this._value
  }
  public set value(v) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  constructor() { }

  onChange = (_: string) => {};
  onTouched = () => {};

  writeValue(value: any) {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean) {
    throw new Error("Method not implemented.");
  }

}
