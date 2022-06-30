import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'form-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputComponent),
    multi: true
  }]
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() touched: boolean = false;

  private _value: string = '';

  public get value(): string {
    return this._value;
  }
  public set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  state: string = '';

  constructor() { }

  onChange = (_: string) => {}
  onTouched = () => {}

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    console.log(this.touched)
    if (this.touched) {
      this.state = this.validate() ? "valid" : "invalid"
    }
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  validate() {
    return this._value !== "";
  }
}
