import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  formdata
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.formdata = new FormGroup(
      {
        uname: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])),
        password: new FormControl("", this.passwordvalidation)
      }

    );
  }

  passwordvalidation(FormControl) {
    if(FormControl.value.length < 5) {
      return { "password" : true };
    }
  }

  onClickSubmit(data) {
    console.log(data.uname);

    if(data.uname == "systemadmin" && data.password == "123") {

      alert("Login Successful");
      this.router.navigate(['app-mainpage'])


    }
    
    else {
      alert("Input Login");
      return false;
    }

  }



}
