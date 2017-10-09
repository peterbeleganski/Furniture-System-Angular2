import {Component} from '@angular/core';
import {Auth} from '../users/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
  Auth = Auth;
  constructor(private router: Router) {
  }


  getCurrUsername() {
    return Auth.getUser();
  }

  isAuthenticated() {
    return Auth.isUserAuthenticated();
  }

  logout() {
    Auth.removeUser();
    Auth.deauthenticateUser();
    this.router.navigateByUrl('');
  }
}
