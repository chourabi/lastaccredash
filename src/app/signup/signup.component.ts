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

  roles = [
    { id : "x", value : "abc" },
    { id : "x", value : "abcd" },
    { id : "x", value : "def" },
    { id : "x", value : "jhi" },
    
  ]

  filtredroles = [
    { id : "x", value : "abc" },
    { id : "x", value : "abcd" },
    { id : "x", value : "def" },
    { id : "x", value : "jhi" },
    
  ]



  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  filter(e){
    console.log(e.target.value);

    const q = e.target.value;

    this.filtredroles = this.roles.filter((e)=>{
      return (  e.value.indexOf(q) != -1  );
    })
    
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
