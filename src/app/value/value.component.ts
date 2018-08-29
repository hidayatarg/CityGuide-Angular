import { Value } from "./../models/value";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-value",
  templateUrl: "./value.component.html",
  styleUrls: ["./value.component.css"]
})
export class ValueComponent implements OnInit {
  constructor(private http: HttpClient) {}

  values: Value[] = [];

  // working block
  ngOnInit() {
    this.getValues().subscribe(res=>{
      this.values = res;
    });
     
  }

  getValues(){

    return this.http.get<Value[]>("http://localhost:51788/api/values");
   // console.dir(this.http.get('http://localhost:51788/api/values'));
  }
}
