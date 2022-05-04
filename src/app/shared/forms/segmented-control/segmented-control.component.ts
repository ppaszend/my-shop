import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface TextOption {
  label: string,
  value: string,
  icon?: string
}

@Component({
  selector: 'app-segmented-control',
  templateUrl: './segmented-control.component.html',
  styleUrls: ['./segmented-control.component.scss']
})
export class SegmentedControlComponent implements OnInit {
  @Input() options: TextOption[] = [];
  @Input() value: String|undefined;

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setValue(value: string): void {
    this.value = value;
    this.change.emit(value);
  }

}
