import {Component, OnInit} from '@angular/core';
import {OptionsService} from '../core/options.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html'
})

export class ListFurnitureComponent implements OnInit {
  furnitures: any = [];
  search: string;
  currPage = 1;
  collection: any;
  constructor (private http: HttpClient, private options: OptionsService) {
    this.options.checkForAuth();
  }

  ngOnInit () {
    this.http
      .get(this.options.getUrl() + `furniture/all?page=${this.currPage}`, {headers: this.options.getOptions()})
      .toPromise()
      .then((res) => {
        this.furnitures = res;
      });
  }

  searchForFurniture () {
    this.http
      .get(this.options.getUrl() + `furniture/all?page=${this.currPage}&search=${this.search}`, {headers: this.options.getOptions()})
      .toPromise()
      .then((res) => {
        this.furnitures = res;
      });

  }

  goPrev() {
    if (this.currPage === 1) {
      return;
    } else {
      this.currPage -= 1;
      this.http
        .get(this.options.getUrl() + `furniture/all?page=${this.currPage}`, {headers: this.options.getOptions()})
        .toPromise()
        .then((res) => {
          this.furnitures = res;
          console.log(this.furnitures.length);
        });
    }
  }

  goNext() {
    if (this.furnitures.length <10) {
      return;
    }
      this.currPage += 1;
      this.http
        .get(this.options.getUrl() + `furniture/all?page=${this.currPage}`, {headers: this.options.getOptions()})
        .toPromise()
        .then((res) => {
          this.furnitures = res;
          console.log(this.furnitures.length);
        });
    }
}
