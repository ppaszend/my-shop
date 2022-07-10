import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {CookieService} from "../../services/cookie/cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });
  sendingInProgress = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
              private user: UserService,
              private cookies: CookieService,
              private router: Router) { }

  async ngOnInit() {
    if (this.user.getIsLoggedValue()) {
      await this.router.navigate([""]);
    }
  }

  async sendForm() {
    if (!this.sendingInProgress) {
      this.sendingInProgress = true;
      this.errorMessage = '';
      const loginStatus = await this.user.login(
        this.loginForm.get("email")?.value,
        this.loginForm.get("password")?.value
      );
      if (loginStatus.success) {
        await this.router.navigate(["account", "settings"]);
      } else {
        this.loginForm.patchValue({password: ''});
        this.errorMessage = loginStatus.message || '';
        this.sendingInProgress = false;
      }
    }
  }
}
