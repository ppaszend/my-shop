import { Component, OnInit } from '@angular/core';
import { NavigationDrawerService } from "../../services/navigation-drawer.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  productInCartAmount: number = 0;

  constructor(private navigationDrawerService: NavigationDrawerService,
              private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getProductsObserver()
      .subscribe(() => this.productInCartAmount = this.shoppingCartService.getAmountOfProductsInCart());
  }

  openNavigationDrawer(): void {
    this.navigationDrawerService.setVisibility(true);
  }

}
