import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string|undefined;
  @Input() icon: string|undefined;
  @Input() color: "green"|"blue"|"gray"|"red" = "blue";
  @Input() styles: object = {};
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
