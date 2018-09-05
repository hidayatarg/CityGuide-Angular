import { AlertifyService } from './../../services/alertify.service';
import { City } from './../../models/city';
import { CityService } from './../../services/city.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers: [CityService]
})
export class CityAddComponent implements OnInit {

  constructor(private cityService: CityService,
              private formBuilder: FormBuilder,
             
  ) { }

  city: City;
  // For city data
  cityAddForm: FormGroup;

  // Form Group Created
  createCityForm() {
    this.cityAddForm = this.formBuilder.group({
      // add validations here
      name: ["", Validators.required],
      description: ["", Validators.required]
    });

  }

  ngOnInit() {
    // When app start create the form
    this.createCityForm();
  }

  // Add city

  add() {
    // When validation is passed
    if (this.cityAddForm.valid) {
      // Read the cityAddForm values add to the object and object is added to the city
      this.city = Object.assign({}, this.cityAddForm.value);
      // TODO: JWT
      this.city.userId = 1;
      // Add via Service
      this.cityService.add(this.city);

     

    }
  }
}
