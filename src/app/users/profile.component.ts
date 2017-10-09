import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OptionsService} from '../core/options.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{
 furnitures: any = [];

 constructor(private http: HttpClient, private options: OptionsService, private router: Router) {
 }

 ngOnInit () {
   this.options.checkForAuth();
   this.http.get(this.options.getUrl() + 'furniture/mine', {headers: this.options.getOptions()})
     .toPromise()
     .then((res) => {
        this.furnitures = res;
     });
 }

 deleteFurniture (id) {
   this.http.post(this.options.getUrl() + 'furniture/delete/' + id, {}, {headers: this.options.getOptions()})
     .toPromise()
     .then((res) => {
        this.ngOnInit();
     });
 }
}
