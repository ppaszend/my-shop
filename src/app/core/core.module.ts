import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {NavigationDrawerService} from "../services/navigation-drawer/navigation-drawer.service";
import {ShoppingCartService} from "../services/shopping-cart/shopping-cart.service";
import {MatIconModule} from "@angular/material/icon";
import {NavigationDrawerComponent} from "./navigation-drawer/navigation-drawer.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserService} from "../services/user/user.service";
import { ToastMessagesComponent } from './toast-messages/toast-messages.component';
import {ToastMessagesService} from "../services/toast-messages/toast-messages.service";



@NgModule({
  declarations: [
    NavbarComponent,
    NavigationDrawerComponent,
    ToastMessagesComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    SharedModule
  ],
  providers: [
    NavigationDrawerService,
    ShoppingCartService,
    UserService,
    ToastMessagesService,
  ],
  exports: [
    NavbarComponent,
    NavigationDrawerComponent,
    ToastMessagesComponent,
  ]
})
export class CoreModule { }
