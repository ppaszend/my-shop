import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {BestsellersService} from "../../services/bestsellers.service";
import {Category} from "../../models/category";
import {Product} from "../../models/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  bestsellers: Product[] = [];

  constructor(private categoriesService: CategoriesService,
              private bestsellersService: BestsellersService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
    this.bestsellersService.getObserver()
      .subscribe(products => this.bestsellers = products);
  }

}
