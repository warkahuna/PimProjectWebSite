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
  token:String = '';

  subscriptionForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    firstName: new FormControl(null,Validators.required),
    lastName: new FormControl(null,Validators.required),
    phone: new FormControl(null,Validators.required),
    address: new FormControl(null,Validators.required),
    ville: new FormControl(null,Validators.required),
    zipCode: new FormControl(null,Validators.required),
    cardToken: new FormControl(null),
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
    this.loadStripe();
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
    this.subscriptionForm.get('cardToken').setValue(this.token);
    this.userService.newSubscription(JSON.stringify(this.subscriptionForm.value)).subscribe(
      data=> {console.log(data);this.toastr.success('subscription', 'success')},
      error=> {console.error(error);this.toastr.success('subscription', 'success')}
      )
    //console.log(JSON.stringify(this.registerForm.value));
  }


  pay(amount) {    
 const that = this;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_UBi15wxKNgXFirOgpM1cjF2u002jlx5fxC',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.token = token;
        that.addSubscription()
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100,
      email:this.subscriptionForm.get('email').value
    });

  }
  handler:any = null;
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_UBi15wxKNgXFirOgpM1cjF2u002jlx5fxC',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            //alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }


}
