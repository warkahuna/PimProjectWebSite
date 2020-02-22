import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  key;
  updatePassword:FormGroup = new FormGroup({
    password: new FormControl(null),
    passwordCheck: new FormControl(null),
    //passwordKey: new FormControl(null)
  })
  constructor(
    private route:ActivatedRoute,private _userService:UserService
  ) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get("key");
    console.log(this.key);
  }
  passwordChange()
  {
    if(!this.updatePassword.valid || (this.updatePassword.controls.password.value != this.updatePassword.controls.passwordCheck.value))
    {
      console.log("invalid form");
      return;
    }
    console.log(this.updatePassword.value);
    this._userService.forgotPasswordChange(JSON.stringify(this.updatePassword.value),this.key).subscribe(
      data=> console.log(data),
      error=> console.error(error)
      
      )
  }
}
