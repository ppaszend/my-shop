import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesService} from "./services/categories/categories.service";
import {BestsellersService} from "./services/bestsellers/bestsellers.service";
import {ShoppingCartService} from "./services/shopping-cart/shopping-cart.service";
import {HomeModule} from "./pages/home/home.module";
import {ShoppingCartModule} from "./pages/shopping-cart/shopping-cart.module";
import {SharedModule} from "./shared/shared.module";
import {CategoryModule} from "./pages/category/category.module";
import {CoreModule} from "./core/core.module";
import {ProductModule} from "./pages/product/product.module";
import {CreateOrderModule} from "./pages/create-order/create-order.module";
import {HttpClientModule} from "@angular/common/http";
import {RegisterModule} from "./pages/register/register.module";
import {LoginModule} from "./pages/login/login.module";
import {SettingsModule} from "./pages/account/settings/settings.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,

    // external modules
    NoopAnimationsModule,

    // project modules
    CoreModule,
    SharedModule,

    // routes
    HomeModule,
    ShoppingCartModule,
    CategoryModule,
    ProductModule,
    CreateOrderModule,
    RegisterModule,
    LoginModule,
    SettingsModule,
  ],
  providers: [
    CategoriesService,
    BestsellersService,
    ShoppingCartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
