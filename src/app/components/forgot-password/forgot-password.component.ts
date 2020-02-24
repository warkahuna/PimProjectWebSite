import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
  })
  constructor(private _userService:UserService,private toastr: ToastrService,private routes:Router) { }

  ngOnInit() {
  }

  forgotPassword()
  {
    if(!this.forgotPasswordForm.valid )
    {
      console.log("invalid form");
      return;
    }
   
    this._userService.forgotPassword(JSON.stringify(this.forgotPasswordForm.value)).subscribe(
      data=> {console.log(data);
              this.toastr.success('a verification mail has been sent check your inbox', 'Password Reset');
              },
      error=> {console.error(error);this.toastr.success('a verification mail has been sent check your inbox', 'Password Reset');}
      )
    console.log(JSON.stringify(this.forgotPasswordForm.value));
    
  }
}
