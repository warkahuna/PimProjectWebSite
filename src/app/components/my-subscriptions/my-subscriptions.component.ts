import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-subscriptions',
  templateUrl: './my-subscriptions.component.html',
  styleUrls: ['./my-subscriptions.component.css']
})
export class MySubscriptionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  newSubscriptions()
  {
    this.router.navigate(["newSubscriptions"]);
  }
}
