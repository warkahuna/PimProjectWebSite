import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data, MejdaService } from '../../Services/mejda.service';
import { Product } from '../../Models/product';

import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {



  profileDisplay=false;
  firstName;
  lastName;


  constructor(public mejdaService:MejdaService, public snackBar: MatSnackBar, private _userService:UserService, private router:Router ) {
    this._userService.profile()
    .subscribe(
      data=>this.profileFill(data),
      error=>this.profileNotFill()
    )
   }

  ngOnInit(): void {
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
