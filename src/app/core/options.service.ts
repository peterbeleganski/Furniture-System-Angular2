import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Auth} from '../users/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class OptionsService {

  constructor (private router: Router) {}

  getOptions () {
    return new HttpHeaders().set('Authorization', 'bearer ' + (Auth.getToken()));
  }

  getUrl () {
    return 'http://localhost:5000/';
  }

  checkForAuth () {
    if (!Auth.isUserAuthenticated()) {
      this.router.navigateByUrl('users/login');
    }
  }
}
