import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface Option {
  name: string,
  value: string|number
}

type directionTypes = 'up'|'down';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() value: string|number|undefined;
  @Input() options: Option[] = [];
  @Input() generateMethod: string|undefined;
  @Input() generateMin: number|undefined;
  @Input() generateMax: number|undefined;
  @Input() direction: directionTypes = "down";

  @Output() changeEvent: EventEmitter<number|string> = new EventEmitter<number|string>();

  selectedOption: Option|undefined;
  expanded: boolean = false;

  numbersGeneratorGrowing(min: number, max: number): Option[] {
    return Array.from({length: max - min + 1}, (_, i: number): Option => ({
        name: (i + 1).toString(),
        value: (i + 1)
    }));
  }

  constructor() {
  }

  ngOnInit(): void {
    if (this.generateMethod) {
      switch (this.generateMethod) {
        case 'numbers':
          if (!this.generateMin) {
            throw "missing generateMin param";
          }
          if (!this.generateMax) {
            throw "missing generateMax param";
          }
          if (this.generateMin < this.generateMax) {
            this.options = this.numbersGeneratorGrowing(this.generateMin, this.generateMax);
            this.selectedOption = this.options[0];
          }
      }
    }
    const option = this.options.find(option => option.value === this.value);
    if (option) {
      this.selectedOption = option;
    }
  }

  setValue(option: Option): void {
    this.selectedOption = option;
    this.changeEvent.emit(option.value);
  }

}
