import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesService} from "./services/categories.service";
import {BestsellersService} from "./services/bestsellers.service";
import {ShoppingCartService} from "./services/shopping-cart.service";
import {HomeModule} from "./pages/home/home.module";
import {ShoppingCartModule} from "./pages/shopping-cart/shopping-cart.module";
import {SharedModule} from "./shared/shared.module";
import {CategoryModule} from "./pages/category/category.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // external modules
    NoopAnimationsModule,

    // project modules
    CoreModule,
    SharedModule,

    // routes
    HomeModule,
    ShoppingCartModule,
    CategoryModule
  ],
  providers: [
    CategoriesService,
    BestsellersService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
