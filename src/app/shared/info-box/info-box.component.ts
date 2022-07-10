import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {
  @Input() title = '';
  @Input() content = '';
  @Input() buttonLabel = 'Close';
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.buttonClick.emit();
  }

}
