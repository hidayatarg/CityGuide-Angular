import { City } from './../../models/city';
import { CityService } from './../../services/city.service';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers:[CityService]
})
export class CityDetailComponent implements OnInit {

  constructor(private activatedRoutes:ActivatedRoute, private citySerice:CityService) { }

  city:City;
  ngOnInit() {
    this.activatedRoutes.params.subscribe(params=>{
      this.getCityById(params["cityId"])
    });
  }

  getCityById(cityId){
    this.citySerice.getCityById(cityId).subscribe(data=>{
      this.city=data;
      console.dir(data);
    });
  }

}
