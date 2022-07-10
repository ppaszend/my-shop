import {Component,  OnInit } from '@angular/core';
import {NavigationDrawerService} from "../../services/navigation-drawer/navigation-drawer.service";
import {Router} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
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
      'slideLeftAnimation',
      [
        transition(
          ':enter',
          [
            style({transform: 'translateX(-100%)'}),
            animate('300ms ease-in-out', style({transform: 'translateX(0)'}))
          ]
        ),
        transition(
          ':leave',
          [
            style({transform: 'translateX(0)'}),
            animate('300ms ease-in-out', style({transform: 'translateX(-100%)'}))
          ]
        )
      ]
    )
  ]
})
export class NavigationDrawerComponent implements OnInit {
  visibility = false;
  isLogged = false;

  constructor(private navigationDrawerService: NavigationDrawerService,
              private user: UserService,
              private router: Router,
  ) {
    this.router.events.subscribe(() => {
      this.close();
    });
    this.user.getIsLoggedObserver().subscribe((isLogged) => {
      this.isLogged = isLogged;
    });
  }

  ngOnInit(): void {
    this.navigationDrawerService.getVisibility()
      .subscribe(visibility => {
        this.visibility = visibility;
      });
  }

  async logout() {
    await this.user.logout();
  }

  close() {
    this.navigationDrawerService.setVisibility(false);
  }

  open() {
    this.navigationDrawerService.setVisibility(true);
  }
}
