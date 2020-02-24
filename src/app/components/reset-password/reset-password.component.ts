import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { ToastrService } from 'ngx-toastr';

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
    private route:ActivatedRoute,private _userService:UserService,
    private toastr: ToastrService,
    private routes:Router
  ) 
  { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get("key");
    console.log(this.key);
  }
  passwordChange()
  {
    if(!this.updatePassword.valid )
    {
      console.log("invalid form");
      return;
    }
    else if(this.updatePassword.controls.password.value != this.updatePassword.controls.passwordCheck.value)
    {
      this.toastr.error('your password must match', 'Password Reset');
    }
    else if(this.updatePassword.controls.password.value < 6)
    {
      this.toastr.error('your password must be over 6 charaters long', 'Password Reset');
    }
    else
      {
    console.log(this.updatePassword.value);
    this._userService.forgotPasswordChange(JSON.stringify(this.updatePassword.value),this.key).subscribe(
      data=> {console.log(data);
              this.toastr.success('password have been updated', 'Password Reset');
              this.routes.navigate(['/home']);
              this.ngOnInit();
            },
      error=> {console.error(error);this.toastr.success('password have been updated', 'Password Reset');
      this.routes.navigate(['/home']);}
      )
       }
    }
}
