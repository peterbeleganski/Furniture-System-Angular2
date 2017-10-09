import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CreateFurnitureComponent} from './create-furniture.component';
import {Auth} from '../users/auth.service';
import {ListFurnitureComponent} from './list-furniture.component';
import {FurnitureDetailsComponent} from './furniture-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    CreateFurnitureComponent,
    ListFurnitureComponent,
    FurnitureDetailsComponent
  ],
  exports: [],
  providers: [
    Auth
  ]
})
export class FurnitureModule {

}
