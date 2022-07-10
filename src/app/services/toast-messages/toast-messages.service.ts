import { Injectable } from '@angular/core';
import ToastMessage from "../../models/toast-message";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastMessagesService {
  _messages = new BehaviorSubject<ToastMessage[]>([]);
  _id: number = 0;

  constructor() { }

  removeMessage(id: number): void {
    this._messages.next(this._messages.value.filter((message) => message.id !== id));
  }

  show(title: string, message: string, timeout=15): void {
    const id = ++this._id;
    this._messages.next([ ...this._messages.value, { id, title, message } ]);
    setTimeout(() => {
      this.removeMessage(id);
    }, timeout * 1000);
  }

  getObservable(): Observable<ToastMessage[]> {
    return this._messages.asObservable();
  }
}
