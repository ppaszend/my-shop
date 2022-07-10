import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDetails} from "../../models/product-details";

interface ProductResponse {
  product: ProductDetails
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProduct(slug: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`http://localhost:3000/api/product/${slug}/`);
  }
}
