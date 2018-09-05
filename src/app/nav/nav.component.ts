// import { AuthService } from './../services/auth.service';
import{AuthService} from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[AuthService]
})
export class NavComponent implements OnInit {

  constructor(public authService : AuthService) { }

  loginUser: any = {};

  ngOnInit() {
  }
    
  // Login Operation
  login(){
    this.authService.login(this.loginUser);
  }
  
  logOut(){
    this.authService.logOut();
  }

  // Property to check : Current User Status
  get isAuthenticated(){
      return this.authService.loggedIn();
  }
}
