import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories = new BehaviorSubject([]);

  constructor() {
    this.fetchCategories();
  }

  fetchCategories(): void {
    fetch("/assets/data/categories.json")
      .then(resp => resp.json())
      .then(data => {
        this.categories.next(data.categories);
      })
  }

  getCategories(): Observable<Array<Category>> {
    return this.categories.asObservable();
  }
}
