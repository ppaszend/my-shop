import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../models/product";
import {HttpClient} from "@angular/common/http";

interface Bestsellers {
  products: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class BestsellersService {
  private products = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    this.fetchProducts().subscribe(
      (response) => {
        if (response) {
          this.products.next(response.products);
        }
      }
    )
  }

  fetchProducts() {
    return this.http.get<Bestsellers>("http://localhost:3000/api/bestsellers/");
  }

  getObserver(): Observable<Product[]> {
    return this.products.asObservable();
  }
}
