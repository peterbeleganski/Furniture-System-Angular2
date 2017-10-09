import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  title: String = 'Hello Home';
  stats: any = {
      furniture: 0,
      users: 0
  };

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5000/stats')
      .toPromise()
      .then((res) => {
        this.stats = res;
      });
  }

}
