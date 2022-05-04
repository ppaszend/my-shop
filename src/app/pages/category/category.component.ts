import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Product} from "../../models/product";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() viewMode: String = "grid";

  products: Product[] = [
    {
      "id": 0,
      "name": "Lorem ipsum",
      "slug": "lorem-ipsum",
      "author": "Adam Mickiewicz",
      "price": 39.99,
      "categoryId": 2,
      "photo": "/assets/photos/na-skraju-strefy.png"
    },
    {
      "id": 0,
      "name": "Lorem ipsum",
      "slug": "lorem-ipsum",
      "author": "Adam Mickiewicz",
      "price": 39.99,
      "categoryId": 2,
      "photo": "/assets/photos/na-skraju-strefy.png"
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    })
  }

}
