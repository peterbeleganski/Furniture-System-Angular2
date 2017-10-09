import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './users/register.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './users/login.component';
import {CreateFurnitureComponent} from './furniture/create-furniture.component';
import {ListFurnitureComponent} from './furniture/list-furniture.component';
import {FurnitureDetailsComponent} from './furniture/furniture-details.component';
import {ProfileComponent} from './users/profile.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users/register', component: RegisterComponent },
  {path: 'users/login', component: LoginComponent},
  {path: 'furniture/create', component: CreateFurnitureComponent},
  {path: 'furniture/all', component: ListFurnitureComponent},
  {path: 'furniture/details/:id', component: FurnitureDetailsComponent},
  {path: 'profile/mine', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class FurnitureRoutesModule {

}
