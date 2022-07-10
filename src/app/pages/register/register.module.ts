import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {UserService} from "../../services/user/user.service";
import {CookieService} from "../../services/cookie/cookie.service";



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    UserService,
    CookieService
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule {}
