import {Component, forwardRef, Input} from '@angular/core';
import {PaymentMethod} from "../../../models/payment-method";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'form-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PaymentMethodComponent),
    multi: true
  }]
})
export class PaymentMethodComponent implements ControlValueAccessor {
  @Input() options: PaymentMethod[] = [];

  private _value: string|undefined = '';
  public get value(): string|undefined {
    return this._value;
  }
  public set value(v: string|undefined) {
    if (v !== this.value) {
      this._value = v;
      this.onChange(v);
    }
  }

  constructor() { }

  onChange = (_: string|undefined) => {}
  onTouched = () => {}

  writeValue(value: string|undefined) {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    throw new Error("Method not implemented.");
  }

}
