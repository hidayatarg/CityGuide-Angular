import { CityService } from './../services/city.service';
import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  // Create cityService instance
  providers:[CityService]
})
export class CityComponent implements OnInit {

  constructor(private cityService:CityService) { }
  //get cities from DB
  cities: City[]
  ngOnInit() {
    this.cityService.getCities().subscribe(data=>{
      this.cities=data;
      console.dir(data);
    });
  }

}
