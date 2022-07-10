import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email:  ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
    firstName: ['', [Validators.required, Validators.maxLength(30)]],
    lastName:  ['', [Validators.required, Validators.maxLength(30)]],
    password:  ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
  });
  sendingInProgress: boolean = false;
  accountCreated: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
              private user: UserService,
              private router: Router) { }

  ngOnInit(): void { }

  sendForm() {
    if (this.registerForm.valid && !this.sendingInProgress) {
      this.sendingInProgress = true;
      this.user.createAccount(
        this.registerForm.get("email")?.value,
        this.registerForm.get("firstName")?.value,
        this.registerForm.get("lastName")?.value,
        this.registerForm.get("password")?.value
      )
        .subscribe((data) => {
          this.sendingInProgress = false;
          if (data.success) {
            this.accountCreated = true;
          } else {
            this.errorMessage = data.message || '';
          }
        })
    }
  }

  async goToLoginPage() {
    await this.router.navigate(["login"]);
  }
}
