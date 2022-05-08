import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {CategoriesListComponent} from "./categories-list/categories-list.component";
import {RouterModule} from "@angular/router";
import {CategoriesService} from "../services/categories.service";
import {ProductsGridComponent} from "./products-grid/products-grid.component";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "./forms/forms.module";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {DialogComponent} from './dialog/dialog.component';


@NgModule({
  declarations: [
    ButtonComponent,
    ProductsListComponent,
    CategoriesListComponent,
    ProductsGridComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
  exports: [
    // modules
    CommonModule,
    FormsModule,

    // components
    ButtonComponent,
    ProductsListComponent,
    CategoriesListComponent,
    ProductsGridComponent,
    DialogComponent,
  ],
  providers: [
    CategoriesService,
    ShoppingCartService,
  ]
})
export class SharedModule { }
