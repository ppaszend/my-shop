import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

type productsListStyleType = 'list'|'grid';

type settingsType = {
  productsListStyle: productsListStyleType
}

@Injectable({
  providedIn: 'root'
})
export class ClientSettingsService {
  private productsListStyle: BehaviorSubject<productsListStyleType> = new BehaviorSubject<productsListStyleType>("list");
  private settings = new BehaviorSubject({
    productsListStyle: "list"
  })

  constructor() { }

  saveInLocalStorage(): void {
    localStorage.setItem("clientSettings", JSON.stringify(this.settings));
  }

  loadFromLocalStorage(): void {
    this.settings = JSON.parse(localStorage.getItem("clientSettings") || "");
  }

  getObserver(): Observable<settingsType> {
    return this.settings.asObservable();
  }

  setProductsListStyle(value: productsListStyleType) {
    this.productsListStyle = value;
    this.settings.next({...this.settings.getValue(), "productsListStyle": value})
    this.saveInLocalStorage();
  }
}
