import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { User } from 'src/app/user.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BlogService } from '../Services/blog.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  lastName:String = '';
  firstName:String = '';

  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;
  form;
  processing = false;
  //username;

  blogPosts;

  commentator;

  commentForm;
  newComment = [];
  enabledComments = [];



  constructor(private _userService:UserService,private router:Router  ,
    private blogService: BlogService,
    private formBuilder: FormBuilder


    ) {
    this._userService.profile()
    .subscribe(
      data=>this.profileFill(data),
      error=>this.router.navigate([''])
    )

    this.createNewBlogForm(); // Create new blog form on start up
    this.createCommentForm(); // Create form for posting comments on a user's blog post

  }




 // Create form for posting comments
 createCommentForm() {
  this.commentForm = this.formBuilder.group({
    comment: ['', Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(200)
    ])]
  })
}

// Enable the comment form
enableCommentForm() {
  this.commentForm.get('comment').enable(); // Enable comment field
}

// Disable the comment form
disableCommentForm() {
  this.commentForm.get('comment').disable(); // Disable comment field
}


 // Function to post a new comment on blog post
 draftComment(id) {
  this.commentForm.reset(); // Reset the comment form each time users starts a new comment
  this.newComment = []; // Clear array so only one post can be commented on at a time
  this.newComment.push(id); // Add the post that is being commented on to the array
}

// Function to cancel new post transaction
cancelSubmission(id) {
  const index = this.newComment.indexOf(id); // Check the index of the blog post in the array
  this.newComment.splice(index, 1); // Remove the id from the array to cancel post submission
  this.commentForm.reset(); // Reset  the form after cancellation
  this.enableCommentForm(); // Enable the form after cancellation
  this.processing = false; // Enable any buttons that were locked
}


 // Function to post a new comment
 postComment(id) {
  this.disableCommentForm(); // Disable form while saving comment to database
  this.processing = true; // Lock buttons while saving comment to database
  const comment = this.commentForm.get('comment').value; // Get the comment value to pass to service function
  // Function to save the comment to the database
  this.blogService.postComment(id, comment).subscribe(data => {
    this.getAllBlogs(); // Refresh all blogs to reflect the new comment
    const index = this.newComment.indexOf(id); // Get the index of the blog id to remove from array
    this.newComment.splice(index, 1); // Remove id from the array
    this.enableCommentForm(); // Re-enable the form
    this.commentForm.reset(); // Reset the comment form
    this.processing = false; // Unlock buttons on comment form
    if (this.enabledComments.indexOf(id) < 0) this.expand(id); // Expand comments for user on comment submission
  });
}

// Expand the list of comments
expand(id) {
  this.enabledComments.push(id); // Add the current blog post id to array
}

// Collapse the list of comments
collapse(id) {
  const index = this.enabledComments.indexOf(id); // Get position of id in array
  this.enabledComments.splice(index, 1); // Remove id from array
}








  // Function to create new blog form
  createNewBlogForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5),
        this.alphaNumericValidation
      ])],
      body: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(5)
      ])]
    })
  }

  // Enable new blog form
  enableFormNewBlogForm() {
    this.form.get('title').enable(); // Enable title field
    this.form.get('body').enable(); // Enable body field
  }

  // Disable new blog form
  disableFormNewBlogForm() {
    this.form.get('title').disable(); // Disable title field
    this.form.get('body').disable(); // Disable body field
  }

  // Validation for title
  alphaNumericValidation(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
    // Check if test returns false or true
    if (regExp.test(controls.value)) {
      return null; // Return valid
    } else {
      return { 'alphaNumericValidation': true } // Return error in validation
    }
  }

  // Function to display new blog form
  newBlogForm() {
    this.newPost = true; // Show new blog form
  }

  // Reload blogs on current page
  reloadBlogs() {
    this.loadingBlogs = true; // Used to lock button
    // Get All Blogs
    this.getAllBlogs();
    setTimeout(() => {
      this.loadingBlogs = false; // Release button lock after four seconds
    }, 4000);
  }



  // Function to submit a new blog post
  onBlogSubmit() {
    this.processing = true; // Disable submit button
    this.disableFormNewBlogForm(); // Lock form

    // Create blog object from form fields
    const blog = {
      title: this.form.get('title').value, // Title field
      body: this.form.get('body').value, // Body field
      createdBy: this.firstName // CreatedBy field
    }

    // Function to save blog into database
    this.blogService.newBlog(blog).subscribe((data : any) => {
      // Check if blog was saved to database or not
      if (!data) {
        this.messageClass = 'alert alert-danger'; // Return error class
        this.message = data.message; // Return error message
        this.processing = false; // Enable submit button
        this.enableFormNewBlogForm(); // Enable form
      } else {
        this.messageClass = 'alert alert-success'; // Return success class
        this.message = data.message; // Return success message
        this.getAllBlogs();
        // Clear form data after two seconds
        setTimeout(() => {
          this.newPost = false; // Hide form
          this.processing = false; // Enable submit button
          this.message = false; // Erase error/success message
          this.form.reset(); // Reset all form fields
          this.enableFormNewBlogForm(); // Enable the form fields
        }, 2000);
      }
    });
  }

  // Function to go back to previous page
  goBack() {
    window.location.reload(); // Clear all variable states
  }



  // Function to get all blogs from the database
  getAllBlogs() {
    // Function to GET all blogs from database
    this.blogService.getAllBlogs().subscribe((data : any) => {
      this.blogPosts = data.blogs; // Assign array to use in HTML

    });
  }






  profileFill(profileData)
  {
    this.firstName = profileData.firstName;
    this.lastName = profileData.lastName;
  }



  // Function to delete blogs
  deleteBlog(id) {
    // Function for DELETE request
    this.blogService.deleteBlog(id).subscribe(data => {
      // Check if delete request worked
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error bootstrap class
        this.message = data.message; // Return error message
      } else {

        this.reloadBlogs() ;

      }
    });

  }


   // Function to like a blog post
   likeBlog(id) {
    // Service to like a blog post
    this.blogService.likeBlog(id).subscribe(data => {
      this.getAllBlogs(); // Refresh blogs after like
    });
  }

// Function to disliked a blog post
  dislikeBlog(id) {
    // Service to dislike a blog post
    this.blogService.dislikeBlog(id).subscribe(data => {
      this.getAllBlogs(); // Refresh blogs after dislike
    });
  }


  ngOnInit(): void {
    this.getAllBlogs(); // Get all blogs on component load
  }

}
