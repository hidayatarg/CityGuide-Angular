import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }

  // Service Address comes from the WebApi
  path ="http://localhost:51788/api/"

  getCities():Observable<City[]>{

    //retun data of type City array
    return this.httpClient.get<City[]>(this.path+"cities");
  }

}
