import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    firstName: new FormControl(null,Validators.required),
    lastName: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
    passwordCheck: new FormControl(null,Validators.required)
  })
  constructor(private _userService:UserService) { }

  ngOnInit() {
  }

  register()
  {
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.passwordCheck.value))
    {
      console.log("invalid form");
      return;
    }
    this._userService.register(JSON.stringify(this.registerForm.value)).subscribe(
      data=> {console.log(data);},
      error=> console.error(error)
      
      )
    //console.log(JSON.stringify(this.registerForm.value));
  }


}
