import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {



  profileDisplay=false;
  firstName;
  lastName;


  constructor(private _userService:UserService, private router:Router) {
    this._userService.profile()
    .subscribe(
      data=>this.profileFill(data),
      error=>this.profileNotFill()
    )
   }

  ngOnInit() {
  }
  profileFill(profileData)
  {
    this.profileDisplay = true;
    this.firstName = profileData.firstName;
    this.lastName = profileData.lastName;
    //this.email = profileData.email;

  }
  profileNotFill()
  {
    this.profileDisplay = false;
  }

}
