import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";
import {CategoryComponent} from "./pages/category/category.component";
import {ProductComponent} from "./pages/product/product.component";
import {CreateOrderComponent} from "./pages/create-order/create-order.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {SettingsComponent} from "./pages/account/settings/settings.component";

const routes: Routes = [
  { path: '',                 component: HomeComponent,         data: {animation: 'fadeAnimation' } },
  { path: 'shopping-cart',    component: ShoppingCartComponent, data: {animation: 'fadeAnimation' } },
  { path: 'category/:slug',   component: CategoryComponent,     data: {animation: 'fadeAnimation' } },
  { path: 'product/:slug',    component: ProductComponent,      data: {animation: 'fadeAnimation' } },
  { path: 'create-order',     component: CreateOrderComponent,  data: {animation: 'fadeAnimation' } },
  { path: 'register',         component: RegisterComponent,     data: {animation: 'fadeAnimation' } },
  { path: 'login',            component: LoginComponent,        data: {animation: 'fadeAnimation' } },
  { path: 'account/settings', component: SettingsComponent,     data: {animation: 'fadeAnimation' } },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled", initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
