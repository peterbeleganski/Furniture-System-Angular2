import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {RegisterComponent} from './register.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login.component';
import {Auth} from './auth.service';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  exports: [],
  providers: [
    Auth
  ]
})

export class UsersModule {

}
