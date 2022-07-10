import {Component, Input, OnInit} from '@angular/core';
import { NavigationDrawerService } from "../../services/navigation-drawer/navigation-drawer.service";
import {ShoppingCartService} from "../../services/shopping-cart/shopping-cart.service";
import {Category} from "../../models/category";
import {animate, AUTO_STYLE, state, style, transition, trigger} from "@angular/animations";
import {ShoppingCartProduct} from "../../models/shopping-cart-product";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('300ms linear', style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('300ms linear', style({opacity: 0}))
          ]
        )
      ]
    ),
    trigger(
      'shoppingCartFocusMain',
      [
        state(
          'true', style({
            'box-shadow': '0 0 4px #000000',
          })
        ),
        state(
          'false', style({
            'box-shadow': '0 0 4px #ffffff',
          })
        ),
        transition(
          'false => true',
          [
            animate('100ms linear')
          ]),
        transition(
          'true => false',
          [
            animate('100ms linear')
          ])
      ]
    ),
    trigger(
      'shoppingCartFocusActive',
      [
        state(
          'true', style({
            'box-shadow': '0 0 4px #000000',
            height: AUTO_STYLE
          })
        ),
        state(
          'false', style({
            'box-shadow': '0 0 4px #ffffff',
            height: 0,
            padding: '0'
          })
        ),
        transition(
          'false => true',
          [
            animate('100ms linear')
          ]),
        transition(
          'true => false',
          [
            animate('100ms linear')
          ])
      ]
    )
  ]
})
export class NavbarComponent implements OnInit {
  private _categories: Category[] = [];
  @Input() set categories(value: Category[]) {
    this._categories = value.map(category => ({...category, focused: false, mouseOverButton: false}));
  }
  get categories(): Category[] {
    return this._categories;
  }
  isLogged = false;

  shoppingCartProducts: ShoppingCartProduct[] = [];
  productInCartAmount: number = 0;
  isMobile: boolean = false;
  currencyDialogVisibility: boolean = false;
  shoppingCartActive: boolean = false;

  constructor(private navigationDrawerService: NavigationDrawerService,
              private shoppingCartService: ShoppingCartService,
              public user: UserService) {
    if (window) {
      this.isMobile = window.innerWidth < 992;
      window.addEventListener("resize", () => {
        this.isMobile = window.innerWidth < 992;
      });
    }

    this.user.getIsLoggedObserver().subscribe((isLogged) => {
      this.isLogged = isLogged;
    })
  }

  ngOnInit(): void {
    this.shoppingCartService.getProductsObserver()
      .subscribe((products) => {
        this.productInCartAmount = this.shoppingCartService.getAmountOfProductsInCart();
        this.shoppingCartProducts = products;
      });
  }

  openNavigationDrawer(): void {
    this.navigationDrawerService.setVisibility(true);
  }

  openCurrencyDialog(): void {
    this.currencyDialogVisibility = true;
  }

  closeCurrencyDialog(): void {
    this.currencyDialogVisibility = false;
  }

  getCategory(id: number) {
    const category = this.categories.find((category) => category.id === id);
    if (category) {
      return category;
    }
    throw new Error("Category with id: ${id} does not exists.")
  }

  openCategory(id: number): void {
    const category = this.getCategory(id);
    if (category) {
      category.mouseOverButton = true;
    }
    setTimeout(() => {
      const category = this.getCategory(id);
      if (category && category.mouseOverButton === true) {
        category.focused = true;
      }
    }, 200);
  }

  closeCategory(id: number): void {
    const category = this.getCategory(id);
    category.mouseOverButton = false;
    category.focused = false
  }

}
