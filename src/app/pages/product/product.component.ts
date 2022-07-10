import { Component, OnInit } from '@angular/core';
import {ProductDetails} from "../../models/product-details";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductDetails = {
    id: 0,
    name: "",
    slug: "",
    description: [],
    price: 0,
    photo: ""
  };

  constructor(private productService: ProductService,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.productService.getProduct(params['slug'] || "").subscribe(({product}) => {
        this.product = {
          id: product.id,
          name: product.name,
          slug: product.slug,
          description: product.description,
          price: product.price,
          photo: product.photo
        };
      });
    })
  }

}
