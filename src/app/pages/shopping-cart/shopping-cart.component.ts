import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ShoppingCartProduct} from "../../models/shopping-cart-product";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  products: ShoppingCartProduct[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  removeProduct(productId: number): void {
    this.shoppingCartService.removeProduct(productId);
  }

  changeProductQuantity(productId: number, quantity: number): void {
    this.shoppingCartService.changeProductQuantity(productId, quantity);
  }

  ngOnInit(): void {
    this.shoppingCartService.getProductsObserver()
      .subscribe(products => {
        this.products = products
      });
  }

}
