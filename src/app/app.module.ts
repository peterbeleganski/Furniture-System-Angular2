import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FurnitureRoutesModule} from './routes.module';
import {HomeComponent} from './home/home.component';
import {FurnitureModule} from './furniture/furniture.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FurnitureModule,
    HttpModule,
    UsersModule,
    RouterModule,
    FurnitureRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
