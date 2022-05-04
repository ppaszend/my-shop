import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {NavigationDrawerService} from "../services/navigation-drawer.service";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {MatIconModule} from "@angular/material/icon";
import {NavigationDrawerComponent} from "./navigation-drawer/navigation-drawer.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NavbarComponent,
    NavigationDrawerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    SharedModule
  ],
  providers: [
    NavigationDrawerService,
    ShoppingCartService
  ],
  exports: [
    NavbarComponent,
    NavigationDrawerComponent
  ]
})
export class CoreModule { }
