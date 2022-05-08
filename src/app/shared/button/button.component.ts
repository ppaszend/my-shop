import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string|undefined;
  @Input() icon: string|undefined;
  @Input() color: "green"|"blue"|"gray" = "blue";
  @Input() styles: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
