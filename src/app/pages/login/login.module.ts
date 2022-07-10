import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {CookieService} from "../../services/cookie/cookie.service";
import {UserService} from "../../services/user/user.service";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    CookieService,
    UserService
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
