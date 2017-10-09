import { Component } from '@angular/core';
import {RegisterUser} from './register-user.model';
import {HttpClient} from '@angular/common/http';

import { Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Auth} from './auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  user: RegisterUser = new RegisterUser();
  returnedData: any;
  constructor(private http: HttpClient, private route: Router) {
    if (Auth.isUserAuthenticated()) {
      this.route.navigateByUrl('');
    }
  }

  register() {
    this.http
      .post('http://localhost:5000/auth/signup', this.user)
      .toPromise()
      .then(data => {
        this.returnedData = data;

        if (this.returnedData.success) {
          this.route.navigateByUrl('users/login');
        }
    });
  }
}
