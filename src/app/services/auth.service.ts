import { AlertifyService } from './alertify.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { HttpHeaders } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private alertifyService:AlertifyService, 
              private router:Router
  ) { }

  path = "http://localhost:51788/api/auth";

  // Need to reach token anytime
  userToken: any;
  decodedToken: any;

  // For angular2-Jwt
  jwtHelper: JwtHelper = new JwtHelper();

  // Take a loginUser of Type *(mode)LoginUser
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");

    // POST *(need HTTPclient)
    // We get the Log in user via subscribe data
    this.httpClient
      .post(this.path + 'login', loginUser, { headers: headers })
      .subscribe(data => {
        this.saveToken(data['tokenString']);
        // Token during app
        this.userToken = data['tokenString'];
        this.decodedToken = this.jwtHelper.decodeToken(data["tokenString"]);
       //Alertify Message
        this.alertifyService.success("Sign in Successfully")
        this.router.navigateByUrl('/city');

      });
  }

  // Save Token to local storage
  saveToken(token) {
    localStorage.setItem('token', token);
  }
}
