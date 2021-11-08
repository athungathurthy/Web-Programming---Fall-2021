import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppTimerComponent } from './app.timer.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  exports: [
    AppTimerComponent
  ]
})
export class AppTimerModule { }
