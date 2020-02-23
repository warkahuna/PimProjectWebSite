import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrom:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,Validators.required)
  })
  constructor(private _userService:UserService, private routes:Router,private toastr: ToastrService) { }

  ngOnInit() {
  }

  login()
  {
    if(!this.loginFrom.valid )
    {
      console.log("invalid form");
      return;
    }
    this._userService.login(JSON.stringify(this.loginFrom.value)).subscribe(
      data=> {console.log(data);this.routes.navigate(['/profile']);},
      error=> {console.error(error);this.toastr.error('Please verifie your email and password', 'wrong password/email');}
      
      )
    console.log(JSON.stringify(this.loginFrom.value));
  }
}
