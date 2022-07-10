import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories/categories.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  @Input() expandable: boolean = true;
  categories: Category[] = [];
  expanded: boolean = !this.expandable;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

}
