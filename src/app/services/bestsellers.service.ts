import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class BestsellersService {
  private products = new BehaviorSubject([]);

  constructor() {
    this.fetchProducts();
  }

  fetchProducts(): void {
    fetch("/assets/data/bestsellers.json")
      .then(resp => resp.json())
      .then(data => {
        this.products.next(data.products);
      })
  }

  getObserver(): Observable<Product[]> {
    return this.products.asObservable();
  }
}
