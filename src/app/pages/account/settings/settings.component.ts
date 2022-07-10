import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {Router} from "@angular/router";
import {UserData} from "../../../models/user-data";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userData: UserData = {
    email: '',
    firstName: '',
    lastName: ''
  };
  userSettingsForm = this.fb.group({
    email: ['', [Validators.required, Validators.min(5), Validators.max(20)]],
    firstName: ['', [Validators.required, Validators.min(5), Validators.max(20)]],
    lastName: ['', [Validators.required, Validators.min(5), Validators.max(20)]]
  });

  constructor(private user: UserService,
              private router: Router,
              private fb: FormBuilder) {
  }

  async ngOnInit() {
    if (this.user.getIsLoggedValue()) {
      this.user.getAccountData().subscribe((userData) => {
        this.userData = userData;
        this.userSettingsForm.setValue(userData);
      });
    } else {
      await this.router.navigate(['login']);
    }
  }

  async saveUserData() {
    this.user.setAccountData(this.userSettingsForm.value).subscribe((data) => {
      console.log(data);
    });
  }

}
