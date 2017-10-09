import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {CreateFurnitureModel} from './create-furniture.model';
import {HttpClient} from '@angular/common/http';
import {OptionsService} from '../core/options.service';
import {ReviewsFurnitureModel} from './reviews-furniture.model';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html'
})

export class FurnitureDetailsComponent implements OnInit {
  id: any;
  likedButtonError = '';
  error = '';
  data: any;
  furniture: CreateFurnitureModel = new CreateFurnitureModel();
  review: ReviewsFurnitureModel = new ReviewsFurnitureModel();
  reviews: any = [];

  constructor (private route: ActivatedRoute,
               private http: HttpClient,
               private options: OptionsService) {
    this.options.checkForAuth();
  }

  ngOnInit () {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.id = id;
      this.http.get(this.options.getUrl() + 'furniture/details/' + id, {headers: this.options.getOptions()})
        .toPromise()
        .then((res) => {
            this.furniture = res;
            console.log(res);
            this.getAllReviews();
        });
    });
  }

  likeFurniture(id) {
    this.http
      .post(`${this.options.getUrl()}furniture/details/${id}/like`, {}, {headers: this.options.getOptions()})
      .toPromise()
      .then((res) => {
      this.data = res;
      if (this.data.success) {
        this.ngOnInit();
      } else {
        this.likedButtonError = 'You have already liked that furniture!';
      }
      });
  }

  createReview() {
    console.log(this.review);
    if (this.review.rating < 1 || this.review.rating > 5) {
      this.error = 'Rating must be in range [1,5]';
      return;
    }

    this.http
      .post(`${this.options.getUrl()}furniture/details/${this.id}/reviews/create`, this.review, {headers: this.options.getOptions()})
      .toPromise()
      .then((res) => {
        this.getAllReviews();
      });
  }

  getAllReviews () {
    this.http
      .get(`${this.options.getUrl()}furniture/details/${this.id}/reviews`, {headers: this.options.getOptions()})
      .toPromise()
      .then((res) => {
        this.reviews = res;
        console.log(res);
      });
  }
}
