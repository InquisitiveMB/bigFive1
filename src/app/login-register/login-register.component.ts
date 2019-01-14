import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from "jquery";
import { ErrorStateMatcher } from '@angular/material';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault()
    const errors = []
    const target = event.target
    const username = target.querySelector('#uname').value
    const email = target.querySelector('#email').value
    const contact = target.querySelector('#contact').value
    const password = target.querySelector('#psw').value
    const cpassword = target.querySelector('#cpsw').value
    
    if(password !=cpassword){
      errors.push("Password Error")
    }

    if(errors.length === 0){
      this.auth.registerUser(username, password).subscribe(data =>{
        console.log(data)
        if(data.success){
          this.router.navigate(['login'])
        }
      })
    }
    console.log(username, password)
  }

}
