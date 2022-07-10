import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Category} from "../../models/category";
import {HttpClient} from "@angular/common/http";

interface CategoriesResponse {
  categories: Category[]
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories = new BehaviorSubject<Category[]>([]);

  constructor(private http: HttpClient) {
    this.fetchCategories().subscribe(
      (response) => this.categories.next(response.categories)
    );
  }

  fetchCategories(): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>("http://localhost:3000/api/categories/");
  }

  getCategories(): Observable<Array<Category>> {
    return this.categories.asObservable();
  }
}
