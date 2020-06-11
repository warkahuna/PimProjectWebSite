import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BlogService } from '../../Services/blog.service';

import { UserService } from 'src/app/user.service';
import { error } from 'protractor';
import { User } from 'src/app/user.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';





@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {


  lastName:String = '';
  firstName:String = '';


  message = false ;
  messageClass = false ;
  blog ;
  processing = false;
  currentUrl;





  constructor(
    private location: Location,
    private activatedRoute:ActivatedRoute,
    private blogService: BlogService,


  ) {}

  // Function to Submit Update
  updateBlogSubmit() {


  }

  // Function to go back to previous page
  goBack() {
    this.location.back();
  }






  ngOnInit(){

    this.blogService.getSingleBlog(this.activatedRoute.snapshot.params.id).subscribe((data : any) => {
      this.blog = data.blog ; // Assign array to use in HTML

    });
}


}
