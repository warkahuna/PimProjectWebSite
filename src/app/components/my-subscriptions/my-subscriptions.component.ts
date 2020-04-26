import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-my-subscriptions',
  templateUrl: './my-subscriptions.component.html',
  styleUrls: ['./my-subscriptions.component.css']
})
export class MySubscriptionsComponent implements OnInit {

  private info = [];
  private info2 = [];
  days;
  constructor(private router:Router,private userService:UserService) { 
    this.getdata()
  }

  ngOnInit() {
  }

  newSubscriptions()
  {
    this.router.navigate(["newSubscriptions"]);
  }

  public getdata()
  {
    this.userService.listSubscription()
    .subscribe(
      data=>this.fillData(data),
      error=>console.log(error)
    )
  }

  public fillData(data){
    
    data.forEach(element => {

      console.log(element);
      this.info.push(element.plan.nickname);
      this.info.push(new Date(element["current_period_start"]*1000).toLocaleString());
      this.info.push(new Date(element["current_period_end"]*1000).toLocaleString());

      var diff = Math.abs(
        new Date(element["current_period_start"]).getTime() - new Date(element["current_period_end"]).getTime()
                         );
      var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
      
      if(diffDays>0)
      this.info.push(diffDays)
      else
      this.info.push(0)
      this.info.push(element.status);
      this.info2.push(this.info);
      this.info=[];
    });
    console.log(this.info2)
  }
}
