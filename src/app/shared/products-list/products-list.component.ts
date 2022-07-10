import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ShoppingCartService} from "../../services/shopping-cart/shopping-cart.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product): void {
    this.shoppingCartService.addProduct(product);
  }

}
