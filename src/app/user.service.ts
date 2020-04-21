import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  ipServer = "http://192.168.1.3:5000";
  constructor(private http: HttpClient) { }

  register(body:any)
  {
    return this.http.post(this.ipServer+'/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  updateProfile(body:any)
  {
    return this.http.put(this.ipServer+'/users/updateProfile',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  forgotPassword(body:any)
  {
    return this.http.post(this.ipServer+'/users/forgotPassword',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  login(body:any)
  {
    return this.http.post(this.ipServer+'/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  profile()
  {
    return this.http.get(this.ipServer+'/users/profile',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  logout()
  {
    return this.http.get(this.ipServer+'/users/logout',{
      //observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  forgotPasswordChange(body:any,key)
  {
    return this.http.post(this.ipServer+'/users/reset/'+key,body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  newSubscription(body:any)
  {
    return this.http.put(this.ipServer+'/users/newSubscription',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
}
