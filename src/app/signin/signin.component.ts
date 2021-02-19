import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  signinForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    
  })
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  signinNow(){
    const username = this.signinForm.value.username;
    const password = this.signinForm.value.password;

    this.auth.signIn(username,password).subscribe((data)=>{
      console.log(data);
      
    })

    
  }
}
