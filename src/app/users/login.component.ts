import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Router} from '@angular/router';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {LoginUserModel} from './login-user.model';
import {Auth} from './auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  user: LoginUserModel = new LoginUserModel();
  returnedData: any;
  error: String = null;

  constructor(private http: HttpClient,
              private route: Router) {
    if (Auth.isUserAuthenticated()) {
      this.route.navigateByUrl('');
    }
  }

  login() {
    console.log(this.user);
    this.http
      .post('http://localhost:5000/auth/login', this.user)
      .toPromise().then((res) => {
        this.returnedData = res;
        if (this.returnedData.success === true) {

          const name = this.returnedData.user.name;
          const token = this.returnedData.token;
          Auth.authenticateUser(token);
          Auth.saveUser(name);

          this.route.navigateByUrl('');
        }else {
          this.error = 'Invalid credentials!';
          this.route.navigateByUrl('users/login');
        }
    });
  }
}
