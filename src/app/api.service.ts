import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  getNewUsersRequests(){

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/getPendingsUsers',
    httpOptions
    
    )

  }


  acceptUser(id){
    


    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/acceptUser?id='+id,
    httpOptions
    
    )
  }


  deleteUser(id){
    
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/deleteUser?id='+id,
    httpOptions
    
    )
  }


  getMyCourses(){
    

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/mycourses',
    httpOptions
    
    )
  }




}
