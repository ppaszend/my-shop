import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";
import {CategoryComponent} from "./pages/category/category.component";
import {ProductComponent} from "./pages/product/product.component";
import {CreateOrderComponent} from "./pages/create-order/create-order.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'category/:slug', component: CategoryComponent },
  { path: 'product/:slug', component: ProductComponent },
  { path: 'create-order', component: CreateOrderComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
