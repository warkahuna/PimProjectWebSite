import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-subscription',
  templateUrl: './new-subscription.component.html',
  styleUrls: ['./new-subscription.component.css']
})
export class NewSubscriptionComponent implements OnInit {

  email:String = '';
  lastName:String = '';
  firstName:String = '';
  password:String = '';
  passwordCheck:String = '';
  phone:String = '';
  address:String = '';
  ville:String = '';
  zipCode:String = '';


  subscriptionForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    firstName: new FormControl(null,Validators.required),
    lastName: new FormControl(null,Validators.required),
    phone: new FormControl(null,Validators.required),
    address: new FormControl(null,Validators.required),
    ville: new FormControl(null,Validators.required),
    zipCode: new FormControl(null,Validators.required),
    password: new FormControl(null),
    passwordCheck: new FormControl(null)
  })
  
  constructor(private userService:UserService,private router:Router,private toastr: ToastrService) { 
    this.userService.profile()
    .subscribe(
      data=>this.profileFill(data),
      error=>this.router.navigateByUrl('/home')
    )
    
  }

  ngOnInit() {
  }

  profileFill(profileData)
  {
    //this.email = profileData.email;
    this.firstName = profileData.firstName;
    this.lastName = profileData.lastName;
    this.subscriptionForm.get('email').setValue(profileData.email);
    this.subscriptionForm.get('firstName').setValue(profileData.firstName);
    this.subscriptionForm.get('lastName').setValue(profileData.lastName);
  }

  addSubscription()
  {
    if(!this.subscriptionForm.valid || (this.subscriptionForm.controls.password.value != this.subscriptionForm.controls.passwordCheck.value))
    {
      console.log("invalid form");
      return;
    }
    this.userService.newSubscription(JSON.stringify(this.subscriptionForm.value)).subscribe(
      data=> {console.log(data);this.toastr.success('subscription', 'success')},
      error=> {console.error(error);this.toastr.error('please verify all the cordonates', 'subscription')}
      
      )
    //console.log(JSON.stringify(this.registerForm.value));
  }

  
}
