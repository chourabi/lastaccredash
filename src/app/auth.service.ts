import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  signIn(username,password){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(environment.apiEndPoint+'/app/signin',
    {username:username,password:password},
    httpOptions
    
    )
    
  }


  signUp(username,email,password,role){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(environment.apiEndPoint+'/app/signup',
    {
      username:username,
      email:email,
      password:password,
      role:role
    },
    httpOptions
    
    )
    
  }





}
