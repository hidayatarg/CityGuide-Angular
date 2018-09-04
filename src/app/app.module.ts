
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// Router for angular
import{RouterModule} from '@angular/router'
// Router.ts
import { appRoutes } from "./routes";

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [AppComponent, ValueComponent, NavComponent, CityComponent],
  imports: [BrowserModule, HttpClientModule, 
  RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
