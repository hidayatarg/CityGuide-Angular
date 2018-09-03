import { Component, OnInit } from '@angular/core';
import { City } from '../models/City';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor() { }
  //get cities from DB
  cities: City[]
  ngOnInit() {
  }

}
