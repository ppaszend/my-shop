import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
  }

  addProductToCart(product: Product) {
    this.shoppingCartService.addProduct(product);
  }

}
