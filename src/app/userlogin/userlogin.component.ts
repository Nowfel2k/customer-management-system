/* 
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
        passwd: new FormControl("", this.passwordvalidation)
      }

    );
  }

  passwordvalidation(formcontrol) {
    if(formcontrol.value.length < 5) {
      return { "passwd" : true };
    }
  }

  onClickSubmit(data) {
    console.log(data.uname);

    if(data.uname == "systemadmin" && data.password == "admin123") {

      alert("Login Successful");
      this.router.navigate(['app-mainpage'])


    }
    
    else {
      alert("Invalid Username/Password");
      return false;
    }

  }



}



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
@Component({
selector: 'app-userlogin',
templateUrl: './userlogin.component.html',
styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
formdata;
constructor(private router: Router) { }
ngOnInit() {
this.formdata = new FormGroup({
uname: new FormControl("", Validators.compose([
Validators.required,
Validators.minLength(6)
])),
passwd: new FormControl("", this.passwordvalidation)
});
}
passwordvalidation(formcontrol) {
if (formcontrol.value.length < 5) {
return {"passwd" : true};
}
}
onClickSubmit(data) {
console.log(data.uname);
if (data.uname == "systemadmin" && data.passwd == "admin123") {
alert("Login Successful");
this.router.navigate(['app-mainpage'])
}
}
} 




this.router.navigate(['app-mainpage'])

*/


import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
selector: 'app-userlogin',
templateUrl: './userlogin.component.html',
styleUrls: ['./userlogin.component.css']
})

export class UserloginComponent {

    constructor(private router: Router) {}

    user_name = "systemadmin"; password = "admin123"

    username_checked = false;
    password_checked = false;

    getUserName(event: string) {
        if (event == this.user_name) this.username_checked = true;
        console.log(event);
    }

    getPassword(event: string) {
        if (event == this.password)  this.password_checked = true;
        console.log(event);
    }


    checkAuthentication() {
        if(this.username_checked == true && this.password_checked == true) {
            alert("Login Successful");
            console.log("Authentication success");
            this.router.navigate(['app-mainpage']);
            
        } else {
            console.log("Authentication failed");
            alert("Invalid Username/Password");
            return false;
        }


    }


}