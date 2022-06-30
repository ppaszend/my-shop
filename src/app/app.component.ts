import { Component } from '@angular/core';
import {CategoriesService} from "./services/categories.service";
import {Category} from "./models/category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'homepage'
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
