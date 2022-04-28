import {Product} from "./product";

export interface ShoppingCartProduct {
  id: number,
  product: Product,
  quantity: number
}
