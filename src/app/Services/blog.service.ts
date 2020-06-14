import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../Models/product';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BlogService {



  baseURL = "http://localhost:5000/blogs";
  headers = new HttpHeaders().set('Content-Type', 'application/json');



  constructor(private http: HttpClient) { }


  newBlog(body:any)
  {
    return this.http.post('http://192.168.1.100:5000/blogs/newBlog',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }


  getAllBlogs()
  {
    return this.http.get(this.baseURL+'/allBlogs')
  }







  // Get employee
  getSingleBlog(id): Observable<any> {
    let url = `${this.baseURL}/singleBlog/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }





  // Delete employee
  deleteBlog(id): Observable<any> {
    let url = `${this.baseURL}/deleteBlog/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }





   // Function to like a blog post
   likeBlog(id) {
    const blogData = { id: id };
    return this.http.put(this.baseURL + '/likeBlog/', blogData ) ;
  }

  // Function to dislike a blog post
  dislikeBlog(id) {
    const blogData = { id: id };
    return this.http.put(this.baseURL + '/dislikeBlog/', blogData ) ;
  }





   // Function to post a comment on a blog post
   postComment(id, comment) {

    // Create blogData to pass to backend
    const blogData = {
      id: id,
      comment: comment
    }
    return this.http.post(this.baseURL + '/comment', blogData  );

  }






  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
