import { AlertifyService } from './alertify.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { HttpHeaders } from '@angular/common/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { RegisterUser } from '../models/registerUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }

  path = "http://localhost:51788/api/auth/";

  // Need to reach token anytime
  userToken: any;
  decodedToken: any;

  // For angular2-Jwt
  jwtHelper: JwtHelper = new JwtHelper();

  TOKEN_KEY = "token"

  // Take a loginUser of Type *(mode)LoginUser
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");

    // POST *(need HTTPclient)
    // We get the Log in user via subscribe data
    this.httpClient
      .post(this.path + 'login', loginUser, { headers: headers })
      .subscribe(data => {
       
         this.saveToken(data);
        // Token during app
         this.userToken = data;
         this.decodedToken = this.jwtHelper.decodeToken(data.toString());
       //  Alertify Message
         this.alertifyService.success("Sign in Successfully");
         this.router.navigateByUrl('/city');
        
      }, (error) => {
        // console.dir(error)
        // console.log(error.status)       
        if (error.status=401){
          this.alertifyService.error("Unauthorized Credintials. Provide the Correct Credintials.");
        }      
      });


  }

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.path + 'register', registerUser, { headers: headers }).
      subscribe(data => {

      });
  }

  // Save Token to local storage
  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY)
    this.alertifyService.error("User LogOut")
  }

  // Status: Currently Logged In?
  loggedIn() {
    // Token status 
    return tokenNotExpired(this.TOKEN_KEY);
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUserId() {
    // Jwt standard
    return this.jwtHelper.decodeToken(this.token).nameid
  }



}
