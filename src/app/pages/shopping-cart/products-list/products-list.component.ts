import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingCartProduct} from "../../../models/shopping-cart-product";

interface ChangeProductQuantityParams {
  itemId: number,
  quantity: number
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: ShoppingCartProduct[] = [];

  @Output() removeProductEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() changeProductQuantityEvent: EventEmitter<ChangeProductQuantityParams> = new EventEmitter<ChangeProductQuantityParams>();

  removeProduct(productId: number): void {
    this.removeProductEvent.emit(productId);
  }

  changeProductQuantity(itemId: number, quantity: string|number): void {
    if (typeof quantity === "number") {
      this.changeProductQuantityEvent.emit({ itemId, quantity });
    } else {
      throw new Error("'quantity' must be of type 'number'.");
    }
  }

  constructor() { }

  ngOnInit(): void {}

}
