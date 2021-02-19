import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signinForm = new FormGroup({
    username : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
    
    
  })
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  signinNow(){
    const username = this.signinForm.value.username;
    const password = this.signinForm.value.password;
    const role = this.signinForm.value.role;
    const email = this.signinForm.value.email;
    

    this.auth.signUp(username,email,password,role).subscribe((data:any)=>{
      console.log(data);

      alert(data.message);
      
    })

    
  }

}
