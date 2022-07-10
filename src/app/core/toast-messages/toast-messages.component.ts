import { Component, OnInit } from '@angular/core';
import {ToastMessagesService} from "../../services/toast-messages/toast-messages.service";
import ToastMessage from "../../models/toast-message";

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.scss']
})
export class ToastMessagesComponent implements OnInit {
  messages: ToastMessage[] = [];

  constructor(toastsService: ToastMessagesService) {
    toastsService.getObservable().subscribe((messages) => {
      this.messages = messages;
    })
  }

  ngOnInit(): void {
  }

}
