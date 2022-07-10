import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../models/product";
import {ShoppingCartProduct} from "../../models/shopping-cart-product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private products = new BehaviorSubject<ShoppingCartProduct[]>([]);

  constructor() {
    this.loadProductsFromLocalStorage();
  }

  getProductsObserver(): Observable<ShoppingCartProduct[]> {
    return this.products.asObservable();
  }

  generateNextId(): number {
    if (this.products.getValue().length === 0) {
      return 0;
    }
    return Math.max(...this.products.getValue().map((product: ShoppingCartProduct) => product.id)) + 1;
  }

  getItemById(itemId: number): ShoppingCartProduct|undefined {
    return this.products.getValue().find((item: ShoppingCartProduct) => item.id === itemId);
  }

  addProduct(product: Product): void {
    const actualProduct = this.products.getValue().find((item: ShoppingCartProduct) => item.product === product);
    if (actualProduct !== undefined) {
      this.changeProductQuantity(actualProduct.id, actualProduct.quantity + 1);
    } else {
      this.products.next([...this.products.getValue(), {
        id: this.generateNextId(),
        product: product,
        quantity: 1
      }]);
    }
    this.saveProductsInLocalStorage();
  }

  removeProduct(productId: number): void {
    this.products.next(this.products.getValue().filter(item => productId !== item.id));
    this.saveProductsInLocalStorage();
  }

  changeProductQuantity(productId: number, quantity: number): void {
    const item: ShoppingCartProduct|undefined = this.getItemById(productId);
    if (item !== undefined) {
      this.products.next([
        ...this.products.getValue().filter((item) => item.id !== productId),
        { ...item, quantity }
      ]);
      this.saveProductsInLocalStorage();
    } else {
      throw new Error(`item with id ${productId} does not exists in shopping cart`);
    }
  }

  getAmountOfProductsInCart(): number {
    return this.products.getValue().map(item => item.quantity).reduce((previousValue, currentValue) => {
      return previousValue + currentValue
    }, 0);
  }

  saveProductsInLocalStorage(): void {
    // todo: dostosować do ssr
    // window.localStorage.setItem("shoppingCart", JSON.stringify({
    //   products: this.products.getValue()
    // }))
  }

  loadProductsFromLocalStorage(): void {
    // todo: dostosować do ssr
    // if (window.localStorage.getItem("shoppingCart")) {
    //   let json: string = window.localStorage.getItem("shoppingCart") || "";
    //   this.products.next(JSON.parse(json).products);
    // }
  }
}
