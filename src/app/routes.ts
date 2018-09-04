import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { ValueComponent } from './value/value.component';

export const appRoutes: Routes =[
    {path:"city", component:CityComponent},
    {path:"value", component:ValueComponent},
    
        // anything rather than upper ones
        // Default value
    {path:"**", redirectTo:"city", pathMatch:"full"}
];