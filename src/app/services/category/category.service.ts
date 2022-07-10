import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../models/product";
import {Category} from "../../models/category";

interface CategoryResponse {
  category: Category
  products: Product[],
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(slug: String): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`http://localhost:3000/api/category/${slug}`);
  }
}
