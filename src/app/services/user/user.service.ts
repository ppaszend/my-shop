import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "../cookie/cookie.service";
import {Router} from "@angular/router";
import {UserData} from "../../models/user-data";
import {Observable, BehaviorSubject} from "rxjs";
import loginResponse from "../../models/api/login-response";
import {ToastMessagesService} from "../toast-messages/toast-messages.service";

interface createUserResponse {
  success: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isLogged = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,
              private cookies: CookieService,
              private router: Router,
              private toastMessages: ToastMessagesService) {
    this._isLogged.next(this.cookies.getCookie("jwt_token") !== '');
  }

  createAccount(email: string, firstName: string, lastName: string, password: string) {
    return this.http.post<createUserResponse>('http://localhost:3000/api/create-user/', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    });
  }

  async login(email: string, password: string): Promise<{success: boolean, message?: string}> {
    return new Promise((resolve) => {
      this.http.post<loginResponse>("http://localhost:3000/api/login/", {
        email: email,
        password: password
      })
        .subscribe((data: loginResponse) => {
          if (data.success && data.token) {
            this.cookies.setCookie("jwt_token", data.token, 5);
            this._isLogged.next(true);
            this.toastMessages.show("Logged in", "ok");
            resolve({success: true});
          } else {
            resolve({success: false, message: data.message});
          }
      });
    })
  }

  async logout() {
    this.cookies.deleteCookie("jwt_token");
    this._isLogged.next(false);
    this.toastMessages.show("Logout", "ok");
    await this.router.navigate(["/"]);
  }

  getAccountData(): Observable<UserData> {
    if (this.getIsLoggedValue()) {
      return this.http.get<UserData>("http://localhost:3000/api/user/", {
        headers: {
          Authorization: `Bearer ${this.cookies.getCookie("jwt_token")}`
        }
      })
    }

    throw new Error("User not authorized");
  }

  setAccountData(data: UserData) {
    if (this.getIsLoggedValue()) {
      return this.http.put("http://localhost:3000/api/user/", data, {
        headers: {
          Authorization: `Bearer ${this.cookies.getCookie("jwt_token")}`
        }
      })
    }
    throw new Error("User not authorized");
  }

  isLogged(): boolean {
    return this.cookies.getCookie("jwt_token") !== '';
  }

  getIsLoggedObserver(): Observable<boolean> {
    return this._isLogged.asObservable();
  }

  getIsLoggedValue(): boolean {
    return this._isLogged.value;
  }
}
