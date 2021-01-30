import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInGroup:FormGroup;
  loginModel:LoginModel;
  msg = '';
  showAlert = false;
  constructor(private fb: FormBuilder,private router: Router) {
    this.loginModel = new LoginModel();

   }

  ngOnInit() {
    this.validateSigninform();
  }
  validateSigninform() {
    this.signInGroup = this.fb.group({
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['', [Validators.required,[Validators.required, Validators.minLength(6)]]],
    });
  }
  loginPageClick() {
    if(!this.signInGroup.valid) {
        alert("Please enter Valid Username and Password");
    }else {
      this.router.navigate(['healthcare']);
    }
  }
}
export class LoginModel {
  userName: string;
   password: string;
   constructor() {
     this.userName = '';
     this.password = '';
   }
}
