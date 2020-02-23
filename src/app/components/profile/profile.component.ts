import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { User } from 'src/app/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo:User;
  email:String = '';
  lastName:String = '';
  firstName:String = '';
  password:String = '';
  passwordCheck:String = '';

  updateProfileForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    firstName: new FormControl(null,Validators.required),
    lastName: new FormControl(null,Validators.required),
    password: new FormControl(null),
    passwordCheck: new FormControl(null)
  })
  constructor(private _userService:UserService,private router:Router,private toastr: ToastrService) { 
    this._userService.profile()
    .subscribe(
      data=>this.profileFill(data),
      error=>this.router.navigate(['home'])
    )
  }

  profileFill(profileData)
  {
    //this.email = profileData.email;
    this.firstName = profileData.firstName;
    this.lastName = profileData.lastName;
    this.updateProfileForm.get('email').setValue(profileData.email);
    this.updateProfileForm.get('firstName').setValue(profileData.firstName);
    this.updateProfileForm.get('lastName').setValue(profileData.lastName);
  }

  ngOnInit() {
  }

  logout()
  {
    this._userService.logout()
    .subscribe(
      data=>{console.log("hello"+data);/*this.router.navigate(['home'])*/},
      error=>console.error(error)
    )
    //this.router.navigate(['home']);
  }

  updateProfile()
  {
    if((this.updateProfileForm.controls.password.value != this.updateProfileForm.controls.passwordCheck.value))
    {
      this.toastr.error('passwords must match', 'Password Update');
    }
    else if(this.updateProfileForm.controls.password.value.length < 6)
    {
      this.toastr.error('password must be over 6 charachters', 'Password Update');
    }
    else
    {
    this.firstName = this.updateProfileForm.get('firstName').value;
    this.lastName = this.updateProfileForm.get('lastName').value;
    
    this._userService.updateProfile(JSON.stringify(this.updateProfileForm.value)).subscribe(
      data=> console.log(data),
      error=> console.error(error)
      
      )
    console.log(JSON.stringify(this.updateProfileForm.value));
    this.toastr.success('your profile was updated succefully', 'Profile Update');
    }
  }
  
  
}
