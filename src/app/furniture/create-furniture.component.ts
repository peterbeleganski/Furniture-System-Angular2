import {Component} from '@angular/core';
import {CreateFurnitureModel} from './create-furniture.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {OptionsService} from '../core/options.service';
 @Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html'
})


export class CreateFurnitureComponent {
  furniture: CreateFurnitureModel = new CreateFurnitureModel();
  error = null;
  returnedData: any;
  constructor(private http: HttpClient, private route: Router, private options: OptionsService) {
    this.options.checkForAuth();
  }

   createFurniture () {
    const headers = this.options.getOptions();

    this.http
      .post('http://localhost:5000/furniture/create', (this.furniture), {headers: headers})
      .toPromise()
      .then(res => {
        this.returnedData = res;
        console.log(res);
        if (this.returnedData.success === true) {
          this.route.navigateByUrl('');
        } else {
          this.error = 'Invalid Form data, try again!';
        }
      });
  }
}
