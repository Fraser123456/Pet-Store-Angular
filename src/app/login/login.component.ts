import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: boolean=false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
    private router: Router
  ) { }

  ngOnInit() {
    this.createLoginform();
  }

  createLoginform(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLoginForm(){
    this.auth.login(this.loginForm.get("email").value,this.loginForm.get("password").value)
    .pipe(first())
    .subscribe(
      pets => {
        console.log(pets);
        this.router.navigateByData({
          url: ["/pets"],
          data: pets
        })
      },
      error => {
        console.log("Error Login");
      }
    )
  }

}
