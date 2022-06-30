import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() icon: 'error'|undefined;
  @Input() title: string|undefined;
  @Input() show: boolean = false;
  @Output() showChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.show = false;
    this.showChange.emit(false);
  }

}
