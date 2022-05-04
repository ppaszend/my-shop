import {Component,  OnInit } from '@angular/core';
import {NavigationDrawerService} from "../../services/navigation-drawer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
})
export class NavigationDrawerComponent implements OnInit {
  visibility = false;

  constructor(private navigationDrawerService: NavigationDrawerService, private router: Router) {
    this.router.events.subscribe(() => {
      this.close();
    })
  }

  ngOnInit(): void {
    this.navigationDrawerService.getVisibility()
      .subscribe(visibility => {
        this.visibility = visibility;
      });
  }

  close() {
    this.navigationDrawerService.setVisibility(false);
  }

  open() {
    this.navigationDrawerService.setVisibility(true);
  }
}
