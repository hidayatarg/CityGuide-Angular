import { CityAddComponent } from './city/city-add/city-add.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';


import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Router for angular
import { RouterModule } from '@angular/router'
// Router.ts
import { appRoutes } from "./routes";

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
// for the gallery ngx
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [AppComponent, ValueComponent, NavComponent, CityComponent, CityDetailComponent, CityAddComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes), NgxGalleryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
