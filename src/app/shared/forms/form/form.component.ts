import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'forms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formGroup: FormGroup|undefined;
  @Input() buttonLoading: boolean = false;
  @Input() submitButtonLabel: string = "send";
  @Input() errorMessage: string = "";
  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  handleSubmit() {
    this.submit.emit();
  }
}
