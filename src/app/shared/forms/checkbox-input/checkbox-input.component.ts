import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'form-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxInputComponent),
    multi: true
  }]
})
export class CheckboxInputComponent implements ControlValueAccessor {
  @Input() label: string = '';

  private _value: boolean = false;

  public get value(): boolean {
    return this._value;
  }

  public set value(v:boolean) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  constructor() { }

  onChange = (_: boolean) => {}
  onTouched = () => {}

  writeValue(value: boolean) {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
}
