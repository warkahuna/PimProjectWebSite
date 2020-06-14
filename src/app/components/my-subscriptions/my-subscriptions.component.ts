import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { stat } from 'fs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-subscriptions',
  templateUrl: './my-subscriptions.component.html',
  styleUrls: ['./my-subscriptions.component.css']
})
export class MySubscriptionsComponent implements OnInit {

  private info = [];
  private info2 = [];
  days;
  diff;
  trial = false;
  constructor(private router: Router, private userService: UserService,private toastr: ToastrService) {

  }

  ngOnInit() {
    this.getdata()
  }

  newSubscriptions() {
    this.router.navigate(["newSubscriptions"]);
  }

  public getdata() {
    this.userService.listSubscription()
      .subscribe(
        data => this.fillData(data),
        error => console.log(error)
      )
  }

  public fillData(data) {

    data.forEach(element => {

      console.log(element);
      this.info.push(element.plan.nickname);
      this.info.push(new Date(element["current_period_start"] * 1000).toLocaleString());
      this.info.push(new Date(element["current_period_end"] * 1000).toLocaleString());

      if (element.status == "trialing") {
        this.diff = Math.abs(
          new Date(element.trial_start).getTime() - new Date(element.trial_end).getTime()
        );
        this.trial = true;
        console.log(Math.ceil(this.diff / (1000 * 3600 * 24)))
      }
      else if (element.status == "active") {
        this.diff = Math.abs(
          new Date(element["current_period_start"]).getTime() - new Date(element["current_period_end"]).getTime()
        );
      }

      var diffDays = Math.ceil(this.diff / (1000 * 3600 * 24));

      if (diffDays > 0)
        this.info.push(diffDays)
      else
        this.info.push(0)
      this.info.push(element.status);
      if (element.status == "canceled")
        this.info.push(false);
      else
      this.info.push(true);
      this.info.push(element.id);
      if (element.status == "trialing")
        this.info.push(true);
        else
        this.info.push(false);
      this.info2.push(this.info);
      this.info = [];
    });
    console.log(this.info2)
  }


  cancelSubscription(data) {
    console.log(data.sub)
    if (status == "trialing") {
      console.log(data)
      
      this.userService.cancelTrial({ id: data.sub })
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      )
    }
    else {
      this.userService.cancelSubscription({ id: data.sub })
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        )
    }

    /*this.userService.cancelSubscription({id:sub})
    .subscribe(
      data=>console.log(data),
      error=>console.log(error)
    )*/
  }

requestRefund(subId)
{
  console.log(subId)
  this.userService.requestRefund(JSON.stringify({subscriptionId: subId})).subscribe(
    data=> {console.log(data);this.toastr.success('request sent', 'success')},
    error=> {console.error(error);this.toastr.success('request sent', 'success')}
    )
}

}
