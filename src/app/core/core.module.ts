import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {NavbarComponent} from './navbar.component';
import {OptionsService} from './options.service';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [OptionsService]
})

export class CoreModule {
}
