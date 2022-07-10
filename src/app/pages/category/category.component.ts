import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Product} from "../../models/product";
import {CategoryService} from "../../services/category/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() viewMode: String = "grid";

  products: Product[] = [];

  constructor(private _route: ActivatedRoute,
              private categoryService: CategoryService) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.categoryService
        .getCategory(params['slug'] || "")
        .subscribe((category) => {
          this.products = category.products;
        });
    });
  }

}
