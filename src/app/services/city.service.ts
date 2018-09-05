import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }

  // Service Address comes from the WebApi
  path = "http://localhost:51788/api/"

  getCities(): Observable<City[]> {
    //retun data of type City array
    return this.httpClient.get<City[]>(this.path + "cities");
  }
  
  getCityById(cityId):Observable<City>{
    return this.httpClient.get<City>(this.path + "cities/detail/?id=" + cityId);
  }

  getPhotosByCity(cityId):Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.path +"cities/photos/?CityId="+cityId)
  }

  add(city){
    this.httpClient.post(this.path+'city/add',city).subscribe();
  }

}
