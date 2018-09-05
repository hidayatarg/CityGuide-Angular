import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private formBuilder:FormBuilder) { }
  registerForm:FormGroup;
  // Hold the register user
  registerUser:any = {};
  ngOnInit() {
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group(
      {
        // Fields in Register
        userName:["",Validators.required],
        password:["",Validators.required,
        Validators.minLength(4),
        Validators.maxLength(18)],
        confirmPassword:["",Validators.required]
      },
      // Custom validator
      {validator:this.passwordMatchValidator}
    )
  }

  // Password Mach check
  passwordMatchValidator(g:FormGroup){
    // Two password match or not
    return g.get('password').value===
    g.get('confirmPassword').value?null:{misMatch:true}
  }

  register(){
    if(this.registerForm.valid){
      this.registerUser=Object.assign({},this.registerForm.value);
      this.authService.register(this.registerUser);
    }
  }
}
