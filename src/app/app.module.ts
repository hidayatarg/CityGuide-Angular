import { PhotoComponent } from './photo/photo.component';
import { RegisterComponent } from './register/register.component';
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

// Reactive Forms 
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

//alertify
import { AlertifyService } from './services/alertify.service';

// Ngx-editor
import { NgxEditorModule } from 'ngx-editor';

// File Upload
import { FileUploadModule } from "ng2-file-upload";


@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent,
    CityAddComponent,
    RegisterComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    FileUploadModule,
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
