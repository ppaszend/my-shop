import { Component } from '@angular/core';
import {CategoriesService} from "./services/categories/categories.service";
import {Category} from "./models/category";
import {fadeAnimation} from './animations';
import {ChildrenOutletContexts} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent {
  title: string = 'homepage'
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService,
              private contexts: ChildrenOutletContexts) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
